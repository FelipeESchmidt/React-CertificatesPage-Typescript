import { certificatesMock } from "./certificatesMock";

// const api = "https://my-fs-backend-blog.herokuapp.com";

// const headers = {
//   Accept: "application/json",
// };

export async function getCertificates() {
  //   return new Promise((resolve, reject) => {
  //     fetch(api + "/posts", { headers })
  //       .then((response) => response.json())
  //       .then((data) => resolve(data))
  //       .catch(reject);
  //   });
  return certificatesMock;
}
