import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
type Message = {
  from: string;
  to: string;
  type: string;
  imgUrl: string;
  sentAt: string;
  text: string;
};
type ServerToClient = {
  "receive-message": (message: Message) => void;
};
type ClientToServer = {
  "send-message": (
    message: Message,
    room: { chatId: string; connection: string },
  ) => void;
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
  clearRecivedMessage: () => void;
};
const socketData = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  connectsocket: () => {},
  disConnectSocket: () => {},
  receiveMessage: undefined,
  clearRecivedMessage: () => {},
});

export const SocketProviderContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const socketRef = useRef<AppSocket | null>(null);
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [receiveMessage, setReceiveMessage] = useState<Message | undefined>();
  //
  const connectsocket = async () => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (socketRef.current?.connected) return;
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
      newSocket.on("receive-message", (message: Message) => {
        setReceiveMessage(message);
      });
      newSocket.connect();
      socketRef.current = newSocket;
    } catch (error) {
      console.log(error);
    }
  };
  //
  const disConnectSocket = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
      setIsConnected(false);
    }
  };
  //
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);
  return (
    <socketData.Provider
      value={{
        socket: socketRef.current,
        isConnected,
        connectsocket,
        disConnectSocket,
        receiveMessage,
        clearRecivedMessage: () => setReceiveMessage(undefined),
      }}
    >
      {children}
    </socketData.Provider>
  );
};
export const SocketApi = () => useContext(socketData);
