import { Modal } from "antd";
import { Room } from "../../../../../Generic/style";
const EmptyRoom = () => {
  const { confirm } = Modal;
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

export default EmptyRoom;
