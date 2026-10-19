import { useNavigate } from "react-router-dom";
import { SocketApi } from "../storage/SocketApi";
import { useState, useEffect } from "react";
import LoadingAnimation from "../features/home/shared/LoadingState/LoadingAnimation";

function ValidateAdminRoute({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const socketApi = SocketApi();
  const { connectsocket, disConnectSocket } = socketApi;
  const [isAdminValidated, setIsAdminValidated] = useState<boolean>(false);
  const urlNavigator = useNavigate();
  useEffect(() => {
    const validateAdmin = async () => {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(
          `${serverPort}/admin/access/api/requst/validate`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "X-Frontend-Key": `${key}`,
            },
          },
        );
        const responds = await requst.json();
        if (responds.ok) {
          //console.log("socket connected");
          connectsocket();
          setIsAdminValidated(true);
        } else {
          disConnectSocket();
          const url = "/admin/access/login";
          urlNavigator(url, { replace: true });
        }
      } catch (error) {
        //alert(`somthing whent wrong: ${error}`);
        console.warn(error);
        disConnectSocket();
        const url = "/admin/access/login";
        urlNavigator(url, { replace: true });
      }
    };
    if (isAdminValidated) return;
    validateAdmin();
  }, []);
  return (
    <>
      {isAdminValidated ? children : <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}

export default ValidateAdminRoute;
