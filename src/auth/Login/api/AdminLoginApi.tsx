const serverPort = import.meta.env.VITE_SERVER_PORT;
export function PostToAdminLoginApi({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ ok: boolean; message: string; adminApiKey: string }> {
  return new Promise((resolve, reject) => {
    const postLoginInfo = fetch(`${serverPort}/admin/access/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    postLoginInfo
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
