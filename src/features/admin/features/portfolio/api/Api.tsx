const serverPort = import.meta.env.VITE_SERVER_PORT;
import type { PortfolioDataType } from "../components/AddNewProjectPopUp";
export interface ProjectInfo {
  pImage: string;
  title: string;
  about: string;
  heading: string;
  sImage: string;
  capabilities: string[];
  duration: string;
  team: string;
  location: string;
  industry: string[];
  projectType: string;
  creationDate: Date;
  projectStatus: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export function postUploadNewProjectData({
  projectInfo,
}: {
  projectInfo: PortfolioDataType;
}): Promise<{
  ok: boolean;
  message: string;
  projectData: ProjectInfo;
}> {
  return new Promise((resolve, reject) => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (!data || data === "null") reject("Access key not found");
    const key = JSON.parse(data as string);
    const formRequst = new FormData();
    formRequst.append("projectImage", projectInfo.image);
    formRequst.append("body", JSON.stringify({ ...projectInfo, image: "" }));
    const requst = fetch(
      `${serverPort}/admin/access/api/requst/upload/new/portfolio/project`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
        },
        body: formRequst,
      },
    );
    requst
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (data.ok) {
              resolve(data);
            } else {
              reject(data.message);
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function getProjectData({
  searchWordsList,
  filterStatus,
}: {
  searchWordsList: string;
  filterStatus: "Active" | "InActive" | "All";
}): Promise<{
  ok: boolean;
  message: string;
  data: ProjectInfo[];
}> {
  return new Promise((resolve, reject) => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (!data || data === "null") reject("Access key not found");
    const key = JSON.parse(data as string);
    const requst = fetch(
      `${serverPort}/admin/access/api/requst/search/filter/get/portfolio/data/list`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchWordsList, filterStatus }),
      },
    );
    requst
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (data.ok) {
              resolve(data);
            } else {
              reject(data.message);
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
