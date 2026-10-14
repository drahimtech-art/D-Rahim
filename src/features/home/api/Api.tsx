import { AllRandomSelectedProjectInfo } from "../shared/AllRandomSelectedProjectInfo /AllRandomSelectedProjectInfo ";
import type { ProjectData } from "../../../storage/PortfolioProjectApi";
type DesignType = {
  moblieDesign: ProjectData[];
  websiteDesign: ProjectData[];
  branding: ProjectData[];
};
const serverPort = import.meta.env.VITE_SERVER_PORT;
const key = import.meta.env.VITE_CLIENT_KEY;
export async function GetProjectList(
  setListOfProjects: React.Dispatch<React.SetStateAction<DesignType>>,
  setAllRandomSelectedProjectInfo: React.Dispatch<
    React.SetStateAction<ProjectData[][] | undefined>
  >,
) {
  //devMode

  try {
    const getList = await fetch(`${serverPort}/home/ourwork/projectlist`, {
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
      if (
        responds.list.branding.length > 3 &&
        responds.list.moblieDesign.length > 3 &&
        responds.list.websiteDesign.length > 3
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log(responds.message);
      return false;
    }
  } catch (error) {
    console.log(`got an error in GetProjectList api ${error}`);
    return false;
  }
}
