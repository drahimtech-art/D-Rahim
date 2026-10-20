const serverPort = import.meta.env.VITE_SERVER_PORT;
import type { AdminProfile } from "../../../../../storage/AdminConfig";
export function getAdminProfileData(): Promise<{
  ok: boolean;
  message: string;
  data: AdminProfile;
}> {
  return new Promise((resolve, reject) => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (!data || data === "null") reject("Access key not found");
    const key = JSON.parse(data as string);
    const requst = fetch(
      `${serverPort}/admin/access/api/requst/search/admin/profile/data`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
          "Content-Type": "application/json",
        },
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
