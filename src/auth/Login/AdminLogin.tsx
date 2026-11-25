import { useState, useRef, type ChangeEvent, useEffect } from "react";
import { PostToAdminLoginApi } from "./api/AdminLoginApi";
import LoginLogo from "/images/loginLogo.png";
import PopUpNotifications from "./components/PopUpNotifications";
import PopUpCodeValidator from "./components/PopUpCodeValidator";
function AdminLogin() {
  const [realEmail, setRealEmail] = useState<string>("");
  const [realPassword, setRealPassword] = useState<string>("");
  const [privacyPassword, setPrivacyPassword] = useState<string>("");
  const loginControlFuncRef = useRef<HTMLButtonElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderCodeValidator, setRenderCodeValidator] =
    useState<boolean>(false);
  const [renderNotificationBar, setRenderNotificationBar] =
    useState<boolean>(false);
  const [isNotificationWaring, setIsNotificationWarning] =
    useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  //
  function validateEmail(e: string) {
    if (typeof e !== "string") return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(e.trim());
  }
  //
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setRealEmail(value);
  }
  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    if (
      value.length > realPassword.length &&
      realPassword.length + 2 <= value.length
    ) {
      // this cheacks for copy paste how useally a user can insert one caracter at a time so if caracter is greater or equal to two then its pasted in
      setRealPassword((prevsValue) => {
        // add nw value to previous value
        const updateValue = [];
        for (let i = 0; i < prevsValue.length; i++) {
          updateValue.push(prevsValue[i]);
        }
        for (let i = prevsValue.length; i < value.length; i++) {
          updateValue.push(value[i]);
        }
        return updateValue.join("");
      });
    } else {
      // else caracter is typed in
      const lastSignificateValue = value[value.length - 1]; // get the recent value entered
      if (lastSignificateValue) {
        // if there is a value
        if (value.length > realPassword.length) {
          // if value was added
          setRealPassword((prevsValue) => {
            // add nw value to previous value
            const updateValue = [];
            for (let i = 0; i < prevsValue.length; i++) {
              updateValue.push(prevsValue[i]);
            }
            updateValue.push(lastSignificateValue);
            return updateValue.join("");
          });
        } else {
          // else if value was deleted
          setRealPassword((prevsValue) => {
            // remove 1 value from list
            const updateValue = [];
            for (let i = 0; i < prevsValue.length - 1; i++) {
              updateValue.push(prevsValue[i]);
            }
            return updateValue.join("");
          });
        }
      } else {
        // else if recent/ all values are empty
        setRealPassword(""); // set data to be empty
      }
    }
  }
  useEffect(() => {
    // listen on new caracter inserted and hide it
    setPrivacyPassword(() => {
      const privacy = [];
      for (let i = 0; i < realPassword.length; i++) {
        privacy.push("*");
      }
      return privacy.join("");
    });
  }, [realPassword]);
  function handleLogin() {
    if (!loginControlFuncRef.current || isLoading) return;
    const isEmailValid = validateEmail(realEmail);
    if (!isEmailValid) {
      setNotificationMessage("Please enter in a valid email");
      setIsNotificationWarning(false);
      setRenderNotificationBar(true);
      setIsLoading(true);
      return;
    }
    if (realPassword.length < 3) {
      setNotificationMessage("Please enter in a valid password");
      setIsNotificationWarning(false);
      setRenderNotificationBar(true);
      setIsLoading(true);
      return;
    }
    loginControlFuncRef.current.classList.remove("AllowedPointerForButton");
    loginControlFuncRef.current.classList.add("notallowedPointerForButton");
    const data = {
      email: realEmail.trim(),
      password: realPassword.trim(),
    };
    PostToAdminLoginApi(data)
      .then(() => {
        setIsLoading(false);
        if (!loginControlFuncRef.current) return;
        loginControlFuncRef.current.classList.remove(
          "notallowedPointerForButton",
        );
        loginControlFuncRef.current.classList.add("AllowedPointerForButton");
        setRenderCodeValidator(true);
      })
      .catch((error) => {
        setNotificationMessage(`${error}`);
        if (`${error}`.includes("email")) {
          setIsNotificationWarning(true);
        } else {
          setIsNotificationWarning(false);
        }
        setRenderNotificationBar(true);
        if (!loginControlFuncRef.current) return;
        loginControlFuncRef.current.classList.remove(
          "notallowedPointerForButton",
        );
        loginControlFuncRef.current.classList.add("AllowedPointerForButton");
        setIsLoading(false);
      });
  }
  return (
    <>
      <div className="w-full h-full  min-h-screen bg-primary-green text-gray-200 flex justify-center items-center">
        <div className="w-full max-w-[810.5px] h-fit ">
          <div className="w-full h-full flex justify-center">
            <span className="flex gap-2 items-center">
              <span className="w-[32.14px] h-12.5">
                <img className="w-full h-full" src={LoginLogo}></img>
              </span>
              <span className="flex flex-col ">
                <h5 className="font-inter text-[20.09px] font-semibold ">
                  D’RAHIM
                </h5>
                <h5 className="font-inter text-[9.04px] font-semibold ">
                  TECH INNOVATION
                </h5>
              </span>
            </span>
          </div>
          <div className="w-full h-full flex justify-center mt-12.5 ">
            <span>
              <h5 className="font-inter font-semibold min28pxMax32px text-center">
                Admin Login
              </h5>
              <h5 className="font-inter font-normal min20Max24px mt-5">
                Welcome back! Please login to your account
              </h5>
            </span>
          </div>
          {/**input */}
          <div className="mt-12.5 ">
            <div className="flex flex-col ">
              <h5 className="font-inter font-medium min20Max24px">Email</h5>
              <input
                className="w-full h-15 border-b-2 border-gray-200 pl-5 mt-0.75 "
                value={realEmail}
                onChange={handleEmailChange}
              ></input>
            </div>
            <div className="flex flex-col mt-7.25">
              <h5 className="font-inter font-medium min20Max24px">Pasword</h5>
              <input
                className="w-full h-15 border-b-2 border-gray-200 pl-5 mt-0.75"
                value={privacyPassword}
                onChange={handlePasswordChange}
              ></input>
            </div>
            <div className="w-full h-full flex justify-end mt-4">
              <span>
                <h5 className="font-inter font-semibold min20Max24px">
                  Forgot Password?
                </h5>
              </span>
            </div>
          </div>
          {/**login btn */}
          <div className="w-full h-full flex justify-center mt-12.5">
            <button
              className="w-50.5 h-12.5 rounded-full bg-[#11AC76] flex justify-center items-center pointer"
              onClick={handleLogin}
              ref={loginControlFuncRef}
            >
              <h5 className="font-medium font-inter min20Max24px">Login</h5>
            </button>
          </div>
        </div>
      </div>
      {renderNotificationBar && (
        <PopUpNotifications
          message={notificationMessage}
          isWaring={isNotificationWaring}
          closePopUp={setRenderNotificationBar}
        />
      )}
      {renderCodeValidator && <PopUpCodeValidator />}
    </>
  );
}
export default AdminLogin;
