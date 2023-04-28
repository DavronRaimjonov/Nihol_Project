import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchUser } from "../../../../redux/modal-slice";
import Obseving from "../user-modals/obseving";
import BookedPlaces from "../user-modals/booked-palces";
import Edit from "../user-modals/edit";
const UserModal = () => {
  const [selected, useSelected] = useState("Observing");
  const { userModalVisibility } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  return (
    <Modal
      open={userModalVisibility}
      onCancel={() => dispatch(switchUser())}
      title={"Information about user"}
      footer={false}
    >
      <Segmented
        defaultValue={"Observing"}
        block
        options={["Observing", "Booked places", "Edit"]}
        onChange={(e) => useSelected(e)}
      />
      {selected === "Observing" ? (
        <Obseving />
      ) : selected === "Booked places" ? (
        <BookedPlaces />
      ) : (
        <Edit />
      )}
    </Modal>
  );
};

export default UserModal;
