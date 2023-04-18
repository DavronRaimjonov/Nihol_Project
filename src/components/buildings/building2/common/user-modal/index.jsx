import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchUser } from "../../../../../redux/modal-slice";

const UserModal = () => {
  const { userModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal
      open={userModalVisibility}
      onCancel={() => dispatch(switchUser())}
      title={"Information about user"}
    >
      Comming soon..
    </Modal>
  );
};

export default UserModal;
