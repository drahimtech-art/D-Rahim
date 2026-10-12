import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import { useState, useRef, type ChangeEvent } from "react";
import { PostToAdminLoginApi } from "./api/AdminLoginApi";
import LoginLogo from "/images/loginLogo.png";
function AdminLogin() {
  const urlNavigator = useNavigate();
  function toAdminDasbord() {
    const url = "/devmode/admin/dashboard";
    urlNavigator({
      pathname: url,
      search: `?${createSearchParams({
        page: "overview",
      })}`,
    });
  }
  const [realEmail, setRealEmail] = useState<string>("");
  const [realPassword, setRealPassword] = useState<string>("");
  const [privacyPassword, setPrivacyPassword] = useState<string>("");
  const loginControlFuncRef = useRef<HTMLButtonElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setRealPassword(value);
    setPrivacyPassword((prevPassword) => {
      if (prevPassword.length < value.length) {
        return `${prevPassword}*`;
      } else {
        const newV: string[] = [];
        for (let i = 0; i < prevPassword.length - 1; i++) {
          newV.push("*");
        }
        console.log(newV);
        return `${newV.join("")}`;
      }
    });
  }
  function handleLogin() {
    if (!loginControlFuncRef.current || isLoading) return;
    const isEmailValid = validateEmail(realEmail);
    if (!isEmailValid) return alert("Please enter in a valid email");
    if (realPassword.length < 3) alert("Please enter in a valid password");
    setIsLoading(true);
    loginControlFuncRef.current.classList.remove("AllowedPointerForButton");
    loginControlFuncRef.current.classList.add("notallowedPointerForButton");
    const data = {
      email: realEmail.trim(),
      password: realPassword.trim(),
    };
    PostToAdminLoginApi(data)
      .then((res) => {
        alert(res.message);
        const CLIENT_KEY = "CLIENT_KEY";
        localStorage.setItem(CLIENT_KEY, JSON.stringify(res.adminApiKey));
        setIsLoading(false);
        if (!loginControlFuncRef.current) return;
        loginControlFuncRef.current.classList.remove(
          "notallowedPointerForButton",
        );
        loginControlFuncRef.current.classList.add("AllowedPointerForButton");
      })
      .catch((error) => {
        setIsLoading(false);
        alert(`${error}`);
        console.warn(error);
        if (!loginControlFuncRef.current) return;
        loginControlFuncRef.current.classList.remove(
          "notallowedPointerForButton",
        );
        loginControlFuncRef.current.classList.add("AllowedPointerForButton");
      });
  }
  return (
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
              value={realPassword}
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
  );
}
export default AdminLogin;
