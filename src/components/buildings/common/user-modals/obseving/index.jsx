import { Button } from "antd";
import { Modal } from "antd";
import dayjs from "dayjs";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { userDate } from "../../../../../Generic/time";
import { useAxios } from "../../../../../hooks/useAxios";
import { switchUser } from "../../../../../redux/modal-slice";
import { ObservingWrap } from "./style";

const Obseving = () => {
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.buildingData);
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user${data._id}`);
  const dateNow = new Date();
  const remaingDay = dayjs(+data.endDate).diff(
    new Date(
      `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`
    ),
    "d"
  );
  const axios = useAxios();
  const deleteUser = async () => {
    const deleteData = {
      roomNumber: userData?.roomNumber,
      clienteID: userData?.clienteID,
      _id: userData?._id,
    };
    await axios({
      url: `/accomodation/${buildingNum.slice(-1)}/delete-user`,
      method: "DELETE",
      body: deleteData,
    });
  };
  const deleteModal = () => {
    return confirm({
      title: "Make sure!",
      content: "This action cannot be undone after deleting!",
      okText: "Delete",
      cancelText: "Cacel",
      onOk() {
        deleteUser();
        dispatch(switchUser());
      },
    });
  };
  const buildingNum = userData?.buildingNumber;
  const birtDate = userDate(userData.birthDate);
  const cameDate = userDate(userData.arrivalDate);
  const endDate = userDate(userData.endDate);
  const buildIndex = userData.buildingNumber.slice(0, 1).toUpperCase();
  const build =
    buildIndex + userData.buildingNumber.split("-").join(" ").slice(1);

  return (
    <ObservingWrap>
      <ObservingWrap.List>
        <ObservingWrap.Key>Full name:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.fullName}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Birth date:</ObservingWrap.Key>
        <ObservingWrap.Key>{birtDate}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Passport number:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.passportID}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Address:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.address}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Came Date:</ObservingWrap.Key>
        <ObservingWrap.Key>{cameDate}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>End Date:</ObservingWrap.Key>
        <ObservingWrap.Key>{endDate}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Remaining days:</ObservingWrap.Key>
        <ObservingWrap.Key>{remaingDay}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Daily price:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.dayCost}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Total price:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.total}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Voucher status:</ObservingWrap.Key>
        <ObservingWrap.Key>Without voucher</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Pay by cash:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.paidByCash}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Pay by card:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.paidByPlasticCard}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Payment difference:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.total}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Building Number:</ObservingWrap.Key>
        <ObservingWrap.Key>{build}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Room number:</ObservingWrap.Key>
        <ObservingWrap.Key>{userData.roomNumber}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.Buttons>
        <Button onClick={() => dispatch(switchUser())}>Cancel</Button>
        <Button type="primary">Move</Button>
        <Button onClick={deleteModal} danger type="primary">
          Delete
        </Button>
      </ObservingWrap.Buttons>
    </ObservingWrap>
  );
};

export default Obseving;
