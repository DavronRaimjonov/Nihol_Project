import { notification } from "antd";

const notFound = {
  message: "Password ot Phone Number is wrong",
};
const notFill = {
  message: "Please fill in all fields!",
};

export const notify = ({ erorStatus }) => {
  switch (erorStatus) {
    case 409:
      return notification.error({ ...notFound });
    case "filingEror":
      return notification.error({ ...notFill });
    default:
      return;
  }
};
