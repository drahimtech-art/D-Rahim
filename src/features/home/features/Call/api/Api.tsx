const serverPort = import.meta.env.VITE_SERVER_PORT;
const key = import.meta.env.VITE_CLIENT_KEY;
import type { BookingRequiredData } from "../../../../../storage/ClientBookingInfo";
export async function postRequstSevice(
  requstForm: BookingRequiredData,
): Promise<{ ok: boolean; message: string }> {
  try {
    const postRequst = await fetch(
      `${serverPort}/home/api/client/requst/service`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Frontend-Key": `${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requstForm),
      },
    );
    const responds: { ok: boolean; message: string } = await postRequst.json();
    if (responds.ok) {
      return responds;
    } else {
      console.log(responds.message);
      throw Error(`${responds.message}`);
    }
  } catch (error) {
    console.log(`got an error in postRequstService api ${error}`);
    return error as unknown as { ok: boolean; message: string };
  }
}
