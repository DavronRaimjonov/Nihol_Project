import { message } from "antd";
import axios from "axios";
import { notify } from "../../Generic/notification";
import { getLocal } from "../../utils/storege";
const { VITE_APP_BASE_URL } = import.meta.env;
export const useAxios = () => {
  return async ({ url, body, header, method = "GET" }) => {
    return await axios({
      url: `${VITE_APP_BASE_URL}${url}`,
      method,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${getLocal("token")}`,
        "Content-Type": "application/json",
        "Allow-Control-Origin": true,
        ...header,
      },
    })
      .then((res) => res)
      .catch((error) => {
        const status = error?.response?.status;
        if (status == 406) {
          message.error(error.message);
        }
      });
  };
};

export const useAxiosHandler = () => {
  return async ({ url, body, header, method = "GET" }) => {
    return await axios({
      url: `${VITE_APP_BASE_URL}${url}`,
      method,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${getLocal("token")}`,
        "Content-Type": "application/json",
        "Allow-Control-Origin": true,
        ...header,
      },
    })
      .then((res) => res.data.data)
      .catch((error) => error);
  };
};
