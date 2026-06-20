import { type ReactNode, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
function AccessAuth({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();
  const serverPort = import.meta.env.VITE_SERVER_PORT;
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
      try {
        const requst = await fetch(`${serverPort}/signin/user/validate/`, {
          method: "GET",
          credentials: "include",
        });
        const responds = await requst.json();
        if (responds.ok) {
          console.log(responds.message);
          setIsUserValidated(true);
        } else {
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
