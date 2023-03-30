import axios from "axios";
const { VITE_APP_BASE_URL } = process.env;
export const useAxios = () => {
  return async ({ url, body, header, method = "GET" }) => {
    axios({
      url: `${VITE_APP_BASE_URL}${url}`,
      method,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Allow-Control-Origin": true,
        ...header,
      },
    })
      .then((res) => res)
      .catch((error) => error);
  };
};
