import { type ReactNode, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { StudentsAppData } from "../../ContextApi/StudentsApi";
import { SocketApi } from "../../ContextApi/SocketApi";
type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  bio: string;
  connectionId: string;
};
function AccessAuth({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();
  const serverPort = import.meta.env.VITE_SERVER_PORT;
  const userDetails = StudentsAppData();
  if (!userDetails) return;
  const socket = SocketApi();
  const { connectsocket, disConnectSocket } = socket;
  const { setUserInfo } = userDetails;
  const [isUserValidated, setIsUserValidated] = useState<boolean>(false);
  const urlNavigator = useNavigate();
  const isVerified = searchParams.get("verified");
  const page = searchParams.get("page");
  if (!isVerified || !page) {
    // first validation url part
    const url = "/students/login/access";
    urlNavigator(url, { replace: true });
  }
  useEffect(() => {
    //second validate user based on user id if record is in database & role is student
    const validateUser = async () => {
      const CLIENT_KEY = "CLIENT_KEY";
      const data = localStorage.getItem(CLIENT_KEY);
      try {
        if (!data || data === "null") throw new Error("Access key not found");
        const key = JSON.parse(data);
        const requst = await fetch(`${serverPort}/signin/user/validate/`, {
          method: "GET",
          credentials: "include",
          headers: {
            "X-Frontend-Key": `${key}`,
          },
        });
        const responds = await requst.json();
        if (responds.ok) {
          connectsocket();
          const userData: UserData = responds.userInfo;
          setUserInfo(userData);
          setIsUserValidated(true);
        } else {
          disConnectSocket();
          const url = "/students/login/access";
          urlNavigator(url, { replace: true });
        }
      } catch (error) {
        alert(`somthing whent wrong: ${error}`);
        const url = "/students/login/access";
        urlNavigator(url, { replace: true });
      }
    };
    if (isVerified) validateUser();
  }, []);
  try {
    return <>{isUserValidated ? children : <h1>loding...</h1>}</>;
  } catch (error) {
    console.log(error);
  }
}
export default AccessAuth;
