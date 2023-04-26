import { useSelector } from "react-redux";
import { TimeResidual, userDate } from "../../../../../Generic/time";
import { ObservingWrap } from "./style";

const Obseving = () => {
  const { data } = useSelector((state) => state.buildingData);
  const remaingDay = TimeResidual(data.arrivalDate, data.endDate);
  const birtDate = userDate(data.birthDate);
  const cameDate = userDate(data.arrivalDate);
  const endDate = userDate(data.endDate);
  const buildIndex = data.buildingNumber.slice(0, 1).toUpperCase();
  const build = buildIndex + data.buildingNumber.split("-").join(" ").slice(1);
  return (
    <ObservingWrap>
      <ObservingWrap.List>
        <ObservingWrap.Key>Full name:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.fullName}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Birth date:</ObservingWrap.Key>
        <ObservingWrap.Key>{birtDate}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Passport number:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.passportID}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Address:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.address}</ObservingWrap.Key>
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
        <ObservingWrap.Key>{data.dayCost}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Total price:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.total}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Voucher status:</ObservingWrap.Key>
        <ObservingWrap.Key>Without voucher</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Pay by cash:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.paidByCash}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Pay by card:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.paidByPlasticCard}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Payment difference:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.total}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Building Number:</ObservingWrap.Key>
        <ObservingWrap.Key>{build}</ObservingWrap.Key>
      </ObservingWrap.List>
      <ObservingWrap.List>
        <ObservingWrap.Key>Room number:</ObservingWrap.Key>
        <ObservingWrap.Key>{data.roomNumber}</ObservingWrap.Key>
      </ObservingWrap.List>
    </ObservingWrap>
  );
};

export default Obseving;
