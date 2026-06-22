import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
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
  "receive-message": (message: Message, contactId: string) => void;
};
type ClientToServer = {
  "send-message": (message: Message) => void;
  "join-room": (connectionId: string) => void;
};
type AppSocket = Socket<ServerToClient, ClientToServer>;
type SocketContextType = {
  socket: AppSocket | null;
  isConnected: boolean;
  connectsocket: (token: string) => void;
  disConnectSocket: () => void;
};
const socketData = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  connectsocket: () => {},
  disConnectSocket: () => {},
});

export const SocketProviderContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const [socket, setSocket] = useState<AppSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const connectsocket = async (token: string) => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (socket?.connected) return;
    try {
      if (!data || data === "null") throw new Error("Access key not found");
      const key = JSON.parse(data);
      const newSocket: AppSocket = io(serverPort, {
        autoConnect: false,
        auth: { token },
        extraHeaders: {
          "X-Frontend-Key": `${key}`,
        },
      });
      newSocket.on("connect", () => {
        alert("Socket conected");
        setIsConnected(true);
      });
      newSocket.on("disconnect", () => {
        alert("Socket disconnected");
        setIsConnected(false);
      });
      newSocket.on("connect_error", (error) => {
        alert(`Socket error:  ${error}`);
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
  useEffect(() => {});

  return (
    <socketData.Provider
      value={{
        socket,
        isConnected,
        connectsocket,
        disConnectSocket,
      }}
    >
      {children}
    </socketData.Provider>
  );
};
export const SocketApi = () => useContext(socketData);
