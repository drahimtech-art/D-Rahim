import { type ReactNode, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
function AccessAuth({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();
  const [isUserValidated, setIsUserValidated] = useState<boolean>(false);
  const urlNavigator = useNavigate();
  const isVerified = searchParams.get("verified");
  const userId = searchParams.get("id");
  const page = searchParams.get("page");
  if (!userId || !isVerified || !page) {
    // first validation url part
    const url = "/students/access/login";
    urlNavigator(url, { replace: true });
  }
  useEffect(() => {
    //second validate user based on user id if record is in database & role is student
    const timeOut = setTimeout(() => {
      //simulate validate with 3 seconds deliay
      (() => {
        setIsUserValidated(true);
      })();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);
  try {
    return <>{isUserValidated ? children : <h1>loding...</h1>}</>;
  } catch (error) {
    console.log(error);
  }
}
export default AccessAuth;
