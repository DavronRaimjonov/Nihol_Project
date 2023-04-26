import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchUser } from "../../../../redux/modal-slice";
import Obseving from "../user-modals/obseving";
import BookedPlaces from "../user-modals/booked-palces";
import Edit from "../user-modals/edit";
import { useAxios } from "../../../../hooks/useAxios";
const UserModal = () => {
  const [selected, useSelected] = useState("Observing");
  const { userModalVisibility } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.buildingData);
  const buildingNum = data?.buildingNumber;
  const axios = useAxios();
  const deleteUser = async () => {
    const deleteData = {
      roomNumber: data?.roomNumber,
      clienteID: data?.clienteID,
      _id: data?._id,
    };
    await axios({
      url: `/accomodation/${buildingNum.slice(-1)}/delete-user`,
      method: "DELETE",
      body: deleteData,
    });
  };
  const dispatch = useDispatch();
  return (
    <Modal
      open={userModalVisibility}
      onCancel={() => dispatch(switchUser())}
      onOk={deleteUser}
      title={"Information about user"}
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
