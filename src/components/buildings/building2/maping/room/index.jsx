import { Room } from "../../../../../Generic/style";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchUser } from "../../../../../redux/modal-slice";
import { getBuildingData } from "../../../../../redux/building-data";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../../hooks/useQuery";
const RoomComponent = ({ item }) => {
  const useQuery = useQueryHandler();
  const { userID } = item;
  const { isLoading, data } = useQuery({
    url: `/accomodation/2/user?_id=${userID}`,
    pathName: `user${userID}`,
  });
  const endData = data?.endDate;
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
      dispatch(getBuildingData(data));
    }
  };
  return (
    <Room onClick={openUserModal} color={"red"}>
      {isLoading ? <LoadingOutlined /> : date}
    </Room>
  );
};

export default RoomComponent;
