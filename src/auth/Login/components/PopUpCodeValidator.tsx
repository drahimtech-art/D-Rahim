import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import {
  PostValidateEmailCode,
  requstNewValidationEmailCode,
} from "../api/AdminLoginApi";
import { useState, useRef, useEffect, type ChangeEvent } from "react";
import LoadingAnimation from "../../../features/home/shared/LoadingState/LoadingAnimation";
function PopUpCodeValidator(): React.ReactElement {
  const urlNavigator = useNavigate();
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const [firstInput, setFirstInput] = useState<string>("");
  const [secondInput, setSecondInput] = useState<string>("");
  const [thirdInput, setThirdInput] = useState<string>("");
  const [fouthInput, setFouthInput] = useState<string>("");
  const [fifthInput, setFifthInput] = useState<string>("");

  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const secondInputRef = useRef<HTMLInputElement | null>(null);
  const thirdInputRef = useRef<HTMLInputElement | null>(null);
  const fouthInputRef = useRef<HTMLInputElement | null>(null);
  const fifthInputRef = useRef<HTMLInputElement | null>(null);
  const [isRequstSent, setIsRequstSent] = useState<boolean>(false);
  const inputFiledParentBodyRef = useRef<HTMLDivElement | null>(null);
  const [isErr, setIsErr] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [timeOutBeforeNextCode, setTimeOutBeforeNext] = useState<number>(0);
  const [startTimeOutBeforeNextCode, setStartTimeOutBeforeNext] =
    useState<boolean>(true);
  //
  function toAdminDasbord() {
    const url = `/admin/access/dashboard`;
    urlNavigator({
      pathname: url,
      search: `?${createSearchParams({
        page: "overview",
      })}`,
    });
  }
  //
  useEffect(() => {
    setTimeOutBeforeNext(40);
    let shouldClearInterval = false;
    const intervalTimer = setInterval(() => {
      //console.log("interval fired");
      setTimeOutBeforeNext((prevsTime) => {
        if (prevsTime === 0) {
          shouldClearInterval = true;
          return prevsTime;
        }
        return prevsTime - 1;
      });
      if (shouldClearInterval) {
        setTimeout(() => {
          //console.log("interval cleared from time out");
          clearInterval(intervalTimer);
        });
      }
    }, 1000);
    return () => {
      //console.log("interval cleared from use effect");
      clearInterval(intervalTimer);
    };
  }, [startTimeOutBeforeNextCode]);
  //
  function handleValidateCode(code: string): void {
    //alert(code);
    PostValidateEmailCode({ code })
      .then((res) => {
        const CLIENT_KEY = "CLIENT_KEY";
        setIsRequstSent(false);
        localStorage.setItem(CLIENT_KEY, JSON.stringify(res.adminApiKey));
        setShouldLoad(true);
        toAdminDasbord();
      })
      .catch((err) => {
        if (!inputFiledParentBodyRef.current) return;
        inputFiledParentBodyRef.current.classList.remove(
          "parent-children-active-border-color-green",
        );
        inputFiledParentBodyRef.current.classList.add(
          "parent-children-err-border-color-red",
        );
        setIsErr(true);
        setErrMsg(`${err}`);
        setIsRequstSent(false);
      });
  }

  //
  useEffect(() => {
    if (
      !firstInputRef.current ||
      !secondInputRef.current ||
      !thirdInputRef.current ||
      !fouthInputRef.current ||
      !fifthInputRef.current
    )
      return;

    if (firstInput.length > 0 && secondInput.length < 1) {
      secondInputRef.current.focus();
    } else if (secondInput.length > 0 && thirdInput.length < 1) {
      thirdInputRef.current.focus();
    } else if (thirdInput.length > 0 && fouthInput.length < 1) {
      fouthInputRef.current.focus();
    } else if (fouthInput.length > 0 && fifthInput.length < 1) {
      fifthInputRef.current.focus();
    } else {
      if (firstInput.length < 1) {
        firstInputRef.current.focus();
      }
    }
    if (!inputFiledParentBodyRef.current) return;
    if (
      firstInput.length > 0 &&
      secondInput.length > 0 &&
      thirdInput.length > 0 &&
      fouthInput.length > 0 &&
      fifthInput.length > 0
    ) {
      inputFiledParentBodyRef.current.classList.add(
        "parent-children-err-border-color-red",
      );
      inputFiledParentBodyRef.current.classList.add(
        "parent-children-active-border-color-green",
      );
      setIsErr(false);
      setIsRequstSent(true);
      handleValidateCode(
        `${firstInput}${secondInput}${thirdInput}${fouthInput}${fifthInput}`,
      );
    }
  }, [firstInput, secondInput, thirdInput, fouthInput, fifthInput]);
  //
  function handleSendNewCode(): void {
    if (isRequstSent) return;
    setIsRequstSent(true);
    setFirstInput("");
    setSecondInput("");
    setThirdInput("");
    setFouthInput("");
    setFifthInput("");
    requstNewValidationEmailCode()
      .then(() => {
        if (!inputFiledParentBodyRef.current) return;
        inputFiledParentBodyRef.current.classList.remove(
          "parent-children-active-border-color-green",
        );
        inputFiledParentBodyRef.current.classList.remove(
          "parent-children-err-border-color-red",
        );
        setIsErr(false);
        setStartTimeOutBeforeNext(!startTimeOutBeforeNextCode);
        setIsRequstSent(false);
      })
      .catch((err) => {
        setErrMsg(`${err}`);
        setIsErr(true);
        setIsRequstSent(false);
      });
  }

  return (
    <>
      <div className="w-full h-screen fixed bodyMaxSizing  top-0 left-0 right-0 z-50">
        <div className="w-full h-full flex justify-center items-center">
          <article className="w-[60%] max-w-[540px] h-[416px] rounded-[30px] bg-[#F0FFF1] p-10">
            <div className="w-full h-full  flex flex-col gap-[25px]">
              <h5 className="text-[22px] font-inter font-semibold">
                Enter code
              </h5>
              <h5 className=" font-normal font-inter text-[18px] max-w-[334px]">
                We’ve sent an activation code to your email address
              </h5>
              <article
                className="w-full grid grid-cols-5 gap-[31px]"
                ref={inputFiledParentBodyRef}
              >
                <input
                  className="w-[64px] h-[72px] border-2 rounded-[15px] pl-[20px] pr-[20px] text-[28px] font-medium font-inter"
                  value={firstInput}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (isRequstSent) return;
                    const lastValue =
                      e.target.value.split("")[e.target.value.length - 1];
                    setFirstInput(lastValue ? lastValue : "");
                  }}
                  ref={firstInputRef}
                  style={{
                    cursor: isRequstSent ? "not-allowed" : "text",
                  }}
                ></input>
                <input
                  className="w-[64px] h-[72px] border-2 rounded-[15px] pl-[20px] pr-[20px] text-[28px] font-medium font-inter"
                  value={secondInput}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (isRequstSent) return;
                    const lastValue =
                      e.target.value.split("")[e.target.value.length - 1];
                    setSecondInput(lastValue ? lastValue : "");
                  }}
                  ref={secondInputRef}
                  style={{
                    cursor: isRequstSent ? "not-allowed" : "text",
                  }}
                ></input>
                <input
                  className="w-[64px] h-[72px] border-2 rounded-[15px] pl-[20px] pr-[20px] text-[28px] font-medium font-inter"
                  value={thirdInput}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (isRequstSent) return;
                    const lastValue =
                      e.target.value.split("")[e.target.value.length - 1];
                    setThirdInput(lastValue ? lastValue : "");
                  }}
                  ref={thirdInputRef}
                  style={{
                    cursor: isRequstSent ? "not-allowed" : "text",
                  }}
                ></input>
                <input
                  className="w-[64px] h-[72px] border-2 rounded-[15px] pl-[20px] pr-[20px] text-[28px] font-medium font-inter"
                  value={fouthInput}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (isRequstSent) return;
                    const lastValue =
                      e.target.value.split("")[e.target.value.length - 1];
                    setFouthInput(lastValue ? lastValue : "");
                  }}
                  ref={fouthInputRef}
                  style={{
                    cursor: isRequstSent ? "not-allowed" : "text",
                  }}
                ></input>
                <input
                  className="w-[64px] h-[72px] border-2 rounded-[15px] pl-[20px] pr-[20px] text-[28px] font-medium font-inter"
                  value={fifthInput}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (isRequstSent) return;
                    const lastValue =
                      e.target.value.split("")[e.target.value.length - 1];
                    setFifthInput(lastValue ? lastValue : "");
                  }}
                  ref={fifthInputRef}
                  style={{
                    cursor: isRequstSent ? "not-allowed" : "text",
                  }}
                ></input>
              </article>
              {isErr && (
                <h5 className="font-inter font-normal line-clamp-1 text-[18px] text-[#FF383C]">
                  {errMsg}
                </h5>
              )}
              <div
                className="flex justify-center "
                style={{
                  marginTop: isErr ? "24px" : "49px",
                }}
              >
                <span className="flex items-center">
                  <h5 className="font-inter font-semibold text-[18px]">
                    Send code again
                    {timeOutBeforeNextCode === 0 && "?"}
                  </h5>
                  {timeOutBeforeNextCode > 0 ? (
                    <h5 className=" ml-2 font-inter font-normal text-[16px]">
                      {`00:${timeOutBeforeNextCode >= 10 ? timeOutBeforeNextCode : "0" + timeOutBeforeNextCode}`}
                    </h5>
                  ) : (
                    <button
                      className="ml-2 font-inter font-normal border-b border-b-[#0051ff] text-[16px] text-[#0051ff] pointer"
                      onClick={handleSendNewCode}
                      style={{
                        cursor: isRequstSent ? "not-allowed" : "pointer",
                      }}
                    >
                      New code
                    </button>
                  )}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      {shouldLoad && <LoadingAnimation shouldFadeOut={false} />}
    </>
  );
}
export default PopUpCodeValidator;
