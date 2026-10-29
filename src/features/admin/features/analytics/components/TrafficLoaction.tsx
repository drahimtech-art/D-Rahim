import linkedinLogoIcon from "/images/icons/LinkedinLogo.png";
import behanceLogoIcon from "/images/icons/BehanceLogo.png";
import facebookLogoIcon from "/images/icons/FacebookLogo.png";
import youtubeLogoIcon from "/images/icons/YoutubLogo.png";
import pinterestLogoIcon from "/images/icons/PinterestLogo.png";
import tiktokLogoIcon from "/images/icons/TikTokLogo.png";
import twitterLogoIcon from "/images/icons/TwitterLogo.png";
import googleLogoIcon from "/images/icons/GoogleLogo.jpeg";
import { useState } from "react";
function TraficLocation({
  facebook,
  linkedIn,
  youtub,
  tiktok,
  behance,
  instagram,
  twitter,
  google,
  pintrest,
  other,
}: {
  facebook: number;
  linkedIn: number;
  youtub: number;
  tiktok: number;
  behance: number;
  instagram: number;
  twitter: number;
  google: number;
  pintrest: number;
  other: number;
}): React.ReactElement {
  const [renderAllTrafic, setRenderAllTrafic] = useState<boolean>(false);
  const totalSum =
    facebook +
    linkedIn +
    youtub +
    tiktok +
    behance +
    instagram +
    twitter +
    google +
    pintrest +
    other;
  //
  function returnPercentValueIn100(value: number): number {
    return Math.round((value / totalSum) * 100);
  }
  return (
    <section className="w-[40%] h-full bg-[#FFFFFF] rounded-[20px] p-4 pr-0">
      <article className="w-full h-full ">
        {/**head */}
        <section className="w-full h-fit p-2  flex">
          <h5 className="font-medium text-[14px] font-inter">
            Traffic Sources
          </h5>
          {!renderAllTrafic && (
            <button
              className="ml-auto pointer"
              onClick={() => setRenderAllTrafic(!renderAllTrafic)}
            >
              <h5 className=" font-medium text-[14px] text-gray-500 font-inter">
                See All
              </h5>
            </button>
          )}
        </section>
        {/**trafic data body */}
        <section className="grid grid-rows-3 mt-3.75 gap-[27px] w-full">
          {/**trafic data card */}
          <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
            <img
              className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
              src={linkedinLogoIcon}
            ></img>
            <span className="flex flex-col pb-3.25 w-full">
              <h5 className="font-medium font-inter text-[16px]">Linked In</h5>
              <span className="flex items-center gap-2 w-[70%]">
                <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                  <span
                    className="bg-[#0088FF] block rounded-[3px] h-full"
                    style={{ width: `${returnPercentValueIn100(linkedIn)}%` }}
                  ></span>
                </span>
                <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(linkedIn)}%`}</h5>
              </span>
            </span>
          </div>
          {/**trafic data card */}
          <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
            <img
              className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
              src={facebookLogoIcon}
            ></img>
            <span className="flex flex-col pb-3.25 w-full">
              <h5 className="font-medium font-inter text-[16px]">Facebook</h5>
              <span className="flex items-center gap-2 w-[70%]">
                <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                  <span
                    className="bg-[#0088FF] block rounded-[3px] h-full"
                    style={{ width: `${returnPercentValueIn100(facebook)}%` }}
                  ></span>
                </span>
                <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(facebook)}%`}</h5>
              </span>
            </span>
          </div>
          {/**trafic data card */}
          <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
            <img
              className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
              src={behanceLogoIcon}
            ></img>
            <span className="flex flex-col pb-3.25 w-full">
              <h5 className="font-medium font-inter text-[16px]">Behance</h5>
              <span className="flex items-center gap-2 w-[70%]">
                <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                  <span
                    className="bg-[#0088FF] block rounded-[3px] h-full"
                    style={{ width: `${returnPercentValueIn100(behance)}%` }}
                  ></span>
                </span>
                <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(behance)}%`}</h5>
              </span>
            </span>
          </div>
          {/** */}
          {renderAllTrafic && (
            <section className="bg-[#FFFFFF] h-fit grid grid-rows-3  gap-[27px] w-full ">
              {/**trafic data card */}
              <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
                <img
                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
                  src={pinterestLogoIcon}
                ></img>
                <span className="flex flex-col pb-3.25 w-full">
                  <h5 className="font-medium font-inter text-[16px]">
                    Pinterest
                  </h5>
                  <span className="flex items-center gap-2 w-[70%]">
                    <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                      <span
                        className="bg-[#0088FF] block rounded-[3px] h-full"
                        style={{
                          width: `${returnPercentValueIn100(pintrest)}%`,
                        }}
                      ></span>
                    </span>
                    <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(pintrest)}%`}</h5>
                  </span>
                </span>
              </div>
              {/**trafic data card */}
              <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
                <img
                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
                  src={googleLogoIcon}
                ></img>
                <span className="flex flex-col pb-3.25 w-full">
                  <h5 className="font-medium font-inter text-[16px]">Google</h5>
                  <span className="flex items-center gap-2 w-[70%]">
                    <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                      <span
                        className="bg-[#0088FF] block rounded-[3px] h-full"
                        style={{
                          width: `${returnPercentValueIn100(google)}%`,
                        }}
                      ></span>
                    </span>
                    <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(google)}%`}</h5>
                  </span>
                </span>
              </div>
              {/**trafic data card */}
              <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
                <img
                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
                  src={tiktokLogoIcon}
                ></img>
                <span className="flex flex-col pb-3.25 w-full">
                  <h5 className="font-medium font-inter text-[16px]">TikTok</h5>
                  <span className="flex items-center gap-2 w-[70%]">
                    <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                      <span
                        className="bg-[#0088FF] block rounded-[3px] h-full"
                        style={{
                          width: `${returnPercentValueIn100(tiktok)}%`,
                        }}
                      ></span>
                    </span>
                    <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(tiktok)}%`}</h5>
                  </span>
                </span>
              </div>
              {/**trafic data card */}
              <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
                <img
                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
                  src={youtubeLogoIcon}
                ></img>
                <span className="flex flex-col pb-3.25 w-full">
                  <h5 className="font-medium font-inter text-[16px]">
                    Youtube
                  </h5>
                  <span className="flex items-center gap, -2 w-[70%]">
                    <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                      <span
                        className="bg-[#0088FF] block rounded-[3px] h-full"
                        style={{
                          width: `${returnPercentValueIn100(youtub)}%`,
                        }}
                      ></span>
                    </span>
                    <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(youtub)}%`}</h5>
                  </span>
                </span>
              </div>
              {/**trafic data card */}
              <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
                <img
                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]"
                  src={twitterLogoIcon}
                ></img>
                <span className="flex flex-col pb-3.25 w-full">
                  <h5 className="font-medium font-inter text-[16px]">
                    Twitter
                  </h5>
                  <span className="flex items-center gap, -2 w-[70%]">
                    <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                      <span
                        className="bg-[#0088FF] block rounded-[3px] h-full"
                        style={{
                          width: `${returnPercentValueIn100(twitter)}%`,
                        }}
                      ></span>
                    </span>
                    <h5 className="font-inter font-normal text-[12.3px]">{`${returnPercentValueIn100(twitter)}%`}</h5>
                  </span>
                </span>
              </div>
            </section>
          )}
        </section>
      </article>
    </section>
  );
}
export default TraficLocation;
