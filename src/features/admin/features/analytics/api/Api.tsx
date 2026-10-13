const serverPort = import.meta.env.VITE_SERVER_PORT;
export interface AnalyticsDataType {
  _id: string;
  dateMonthYearDate: string;
  liveVistors: number;
  newUsers: number;
  pageViewed: number;
  bouncedBackUsers: number;
  returningUsers: number;
  deviceType: {
    desktop: number;
    mobile: number;
    tablet: number;
    other: number;
    _id: string;
  };
  platformVisitedFrom: {
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
    _id: string;
  };
  __v: number;
}
export function getAnalyticsData({
  dateFilterList,
}: {
  dateFilterList: string[];
}): Promise<{ ok: boolean; message: string; data: AnalyticsDataType }> {
  return new Promise((resolve, reject) => {
    const CLIENT_KEY = "CLIENT_KEY";
    const data = localStorage.getItem(CLIENT_KEY);
    if (!data || data === "null") reject("Access key not found");
    const key = JSON.parse(data as string);
    const requst = fetch(
      `${serverPort}/admin/access/api/requst/get/analytics/website/data`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ dateFilterList: dateFilterList }),
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
