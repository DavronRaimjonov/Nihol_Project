import { useQuery } from "react-query";
import { Room } from "../../../../../Generic/style";
import { useAxios } from "../../../../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchUser } from "../../../../../redux/modal-slice";
import { getBuildingData } from "../../../../../redux/building-data";
import dayjs from "dayjs";
const RoomComponent = ({ item }) => {
  const axios = useAxios();
  const { userID } = item;
  const { isLoading, data } = useQuery(
    `user${userID}`,
    () => {
      return axios({ url: `/accomodation/2/user?_id=${userID}` });
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
  const datas = data?.data?.data;
  const endData = datas?.endDate;
  const dateNow = new Date();
  const date = dayjs(+endData).diff(
    new Date(
      `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`
    ),
    "d"
  );
  const dispatch = useDispatch();
  const openUserModal = () => {
    if (!isLoading) {
      dispatch(switchUser());
      dispatch(getBuildingData(datas));
    }
  };
  return (
    <Room onClick={openUserModal} color={"red"}>
      {isLoading ? <LoadingOutlined /> : date}
    </Room>
  );
};

export default RoomComponent;
