import linkedinLogoIcon from "/images/icons/LinkedinLogo.png";
import behanceLogoIcon from "/images/icons/BehanceLogo.png";
import facebookLogoIcon from "/images/icons/FacebookLogo.png";
function GraphAndTrafficLocation(): React.ReactElement {
  return (
    <article className="w-full h-[310px] mt-[20px] flex gap-2">
      {/**graph */}
      <section className="w-[60%] h-full bg-[#FFFFFF] rounded-[20px]"></section>
      {/**user vist trafic location */}
      <section className="w-[40%] h-full bg-[#FFFFFF] rounded-[20px] p-4 pr-0">
        <article className="w-full h-full ">
          {/**head */}
          <section className="w-full h-fit p-2  flex">
            <h5 className="font-medium text-[14px] font-inter">
              Traffic Sources
            </h5>
            <button className="ml-auto pointer">
              <h5 className=" font-medium text-[14px] text-gray-500 font-inter">
                See All
              </h5>
            </button>
          </section>
          {/**trafic data body */}
          <section className="grid grid-rows-3 mt-3.75 gap-[27px] w-full">
            {/**trafic data card */}
            <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
              <img className="w-[40px] h-[40px]" src={linkedinLogoIcon}></img>
              <span className="flex flex-col pb-3.25 w-full">
                <h5 className="font-medium font-inter text-[16px]">
                  Linked In
                </h5>
                <span className="flex items-center gap-2 w-[70%]">
                  <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                    <span
                      className="bg-[#0088FF] block rounded-[3px] h-full"
                      style={{ width: "75%" }}
                    ></span>
                  </span>
                  <h5 className="font-inter font-normal text-[12.3px]">75%</h5>
                </span>
              </span>
            </div>
            {/**trafic data card */}
            <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
              <img className="w-[40px] h-[40px]" src={facebookLogoIcon}></img>
              <span className="flex flex-col pb-3.25 w-full">
                <h5 className="font-medium font-inter text-[16px]">Facebook</h5>
                <span className="flex items-center gap-2 w-[70%]">
                  <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                    <span
                      className="bg-[#0088FF] block rounded-[3px] h-full"
                      style={{ width: "60%" }}
                    ></span>
                  </span>
                  <h5 className="font-inter font-normal text-[12.3px]">60%</h5>
                </span>
              </span>
            </div>
            {/**trafic data card */}
            <div className="flex gap-3.25 items-center w-full border-b-2 border-[#eeeded]">
              <img className="w-[40px] h-[40px]" src={behanceLogoIcon}></img>
              <span className="flex flex-col pb-3.25 w-full">
                <h5 className="font-medium font-inter text-[16px]">Behance</h5>
                <span className="flex items-center gap-2 w-[70%]">
                  <span className="w-full h-[6px] mt-auto block rounded-[3px] bg-[#eeeded]">
                    <span
                      className="bg-[#0088FF] block rounded-[3px] h-full"
                      style={{ width: "50%" }}
                    ></span>
                  </span>
                  <h5 className="font-inter font-normal text-[12.3px]">50%</h5>
                </span>
              </span>
            </div>
          </section>
        </article>
      </section>
    </article>
  );
}
export default GraphAndTrafficLocation;
