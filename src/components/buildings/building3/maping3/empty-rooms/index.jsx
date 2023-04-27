import { Room } from "../../../../../Generic/style";
import { Modal } from "antd";

const { confirm } = Modal;
const EmptyRoom = () => {
  const confirmModal = () => {
    return confirm({
      title: "Empty place",
      content:
        "This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.",
      closable: true,
      okText: "Add",
      cancelText: "Book",
    });
  };
  return <Room onClick={confirmModal} color={"green"}></Room>;
};
//2/create-user add user
export default EmptyRoom;
