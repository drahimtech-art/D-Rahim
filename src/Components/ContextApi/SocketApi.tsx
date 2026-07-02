import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type SetStateAction,
} from "react";
import { io, Socket } from "socket.io-client";
type Message = {
  from: string;
  to: string;
  type: string;
  imgUrl: string;
  date: string;
  time: string;
  text: string;
};
type ServerToClient = {
  "receive-message": (message: Message) => void;
};
type ClientToServer = {
  "send-message": (message: Message, room: string) => void;
  "join-room": (connectionId: string) => void;
  "leave-room": (connectionId: string) => void;
};
type AppSocket = Socket<ServerToClient, ClientToServer>;
type SocketContextType = {
  socket: AppSocket | null;
  isConnected: boolean;
  connectsocket: () => void;
  disConnectSocket: () => void;
  receiveMessage: Message | undefined;
  setReceiveMessage: React.Dispatch<SetStateAction<Message | undefined>>;
};
const socketData = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  connectsocket: () => {},
  disConnectSocket: () => {},
  receiveMessage: undefined,
  setReceiveMessage: () => {},
});

export const SocketProviderContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const [socket, setSocket] = useState<AppSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [receiveMessage, setReceiveMessage] = useState<Message | undefined>();
  //
  const connectsocket = async () => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (socket?.connected) return;
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const newSocket: AppSocket = io(serverPort, {
        autoConnect: false,
        withCredentials: true,
        extraHeaders: {
          "X-Frontend-Key": `${key}`,
        },
      });
      newSocket.on("connect", () => {
        console.log("Socket conected");
        setIsConnected(true);
      });
      newSocket.on("disconnect", () => {
        console.log("Socket disconnected");
        setIsConnected(false);
      });
      newSocket.on("connect_error", (error) => {
        console.log(`Socket error:  ${error}`);
        setIsConnected(false);
      });
      newSocket.connect();
      setSocket(newSocket);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const disConnectSocket = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
      setIsConnected(false);
    }
  };
  useEffect(() => {
    if (!socket) return;
    console.log("mount");
    socket.on("receive-message", (message) =>
      setReceiveMessage((prevMessage) => (prevMessage = message)),
    );
    //
    return () => {
      socket.off("receive-message", (message) =>
        setReceiveMessage((prevMessage) => (prevMessage = message)),
      );
      console.log("clean up");
    };
  }, [isConnected]);
  useEffect(() => {
    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  return (
    <socketData.Provider
      value={{
        socket,
        isConnected,
        connectsocket,
        disConnectSocket,
        receiveMessage,
        setReceiveMessage,
      }}
    >
      {children}
    </socketData.Provider>
  );
};
export const SocketApi = () => useContext(socketData);
