import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchCreatedUser } from "../../../../redux/modal-slice";
import Ordinary from "../created-modals/ordinary";
import Vaucher from "../created-modals/vaucher";

const CreatedUserModal = () => {
  const { createdUserVisibility } = useSelector((state) => state.modal);
  const [segmented, setSegmented] = useState("Ordinary");
  const dispatch = useDispatch();
  return (
    <Modal
      title={"Add new user"}
      open={createdUserVisibility}
      onCancel={() => dispatch(switchCreatedUser())}
      okText={"Add"}
      cancelText={"Cancel"}
      footer={false}
    >
      <Segmented
        defaultValue={"Ordinary"}
        onChange={(e) => setSegmented(e)}
        block
        options={["Ordinary", "Vaucher"]}
      />
      {segmented === "Ordinary" ? <Ordinary /> : <Vaucher />}
    </Modal>
  );
};

export default CreatedUserModal;
