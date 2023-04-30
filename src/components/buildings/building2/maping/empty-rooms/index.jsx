import { Room } from "../../../../../Generic/style";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { switchCreatedUser } from "../../../../../redux/modal-slice";

const { confirm } = Modal;
const EmptyRoom = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();
  const confirmModal = () => {
    return confirm({
      title: "Empty place",
      content:
        "This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.",
      closable: true,
      okText: "Add",
      cancelText: "Book",
      onOk() {
        dispatch(switchCreatedUser());
      },
    });
  };
  return <Room onClick={confirmModal} color={"green"}></Room>;
};

export default EmptyRoom;
