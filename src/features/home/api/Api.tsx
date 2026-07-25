import { AllRandomSelectedProjectInfo } from "../shared/AllRandomSelectedProjectInfo /AllRandomSelectedProjectInfo ";
import products from "../../../Components/Products";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
  popUpHeadding: string;
  popHeadText: string;
  popImageUrl: string;
  capabilities: string[];
  duration: string;
  team: string[];
  location: string;
  industry: string[];
  endText: string;
};
type DesignType = {
  moblieDesign: OurWorkData[];
  websiteDesign: OurWorkData[];
  branding: OurWorkData[];
};
const serverPort = import.meta.env.VITE_SERVER_PORT;
const key = import.meta.env.VITE_CLIENT_KEY;
export async function GetOurWorkList(
  setListOfProjects: React.Dispatch<React.SetStateAction<DesignType>>,
  setAllRandomSelectedProjectInfo: React.Dispatch<
    React.SetStateAction<OurWorkData[][] | undefined>
  >,
) {
  //devMode
  const listOfAllProdocts = products();
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        setListOfProjects(listOfAllProdocts);
        AllRandomSelectedProjectInfo(
          listOfAllProdocts,
          setAllRandomSelectedProjectInfo,
        );
        resolve(true);
      }, 1000);
    });
    return true;
    /*
    const getList = await fetch(`${serverPort}/home/get/ourwork/projectlist`, {
      method: "GET",
      credentials: "include",
      headers: {
        "X-Frontend-Key": `${key}`,
      },
    });
    const responds: { ok: boolean; message: string; list: DesignType } =
      await getList.json();
    if (responds.ok) {
      console.log(responds.message);
      setListOfProjects(responds.list);
      AllRandomSelectedProjectInfo(
        responds.list,
        setAllRandomSelectedProjectInfo,
      );
      return true;
    } else {
      console.log(responds.message);
      return false;
    }
    */
  } catch (error) {
    console.log(`got an error in GetOurWorkList api ${error}`);
    return false;
  }
}
