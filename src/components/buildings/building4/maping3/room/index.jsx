import { useQuery } from "react-query";
import { Room } from "../../../../../Generic/style";
import { useAxios } from "../../../../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchUser } from "../../../../../redux/modal-slice";
import { TimeResidual } from "../../../../../Generic/time";
const RoomComponent = ({ item }) => {
  const axios = useAxios();
  const { userID } = item;
  const { isLoading, data } = useQuery(
    `user${userID}`,
    () => {
      return axios({ url: `/accomodation/4/user?_id=${userID}` });
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
  const datas = data?.data?.data;
  const arrivalData = datas?.arrivalDate;
  const endData = datas?.endDate;
  const dispatch = useDispatch();
  const openUserModal = () => {
    return !isLoading && dispatch(switchUser());
  };
  const date = TimeResidual(arrivalData, endData);
  return (
    <Room onClick={openUserModal} color={"red"}>
      {isLoading ? <LoadingOutlined /> : `${date}`}
    </Room>
  );
};

export default RoomComponent;
