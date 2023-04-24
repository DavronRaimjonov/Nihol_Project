import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { Wrapper } from "../../home/style";
import { Spin } from "antd";
import { useQuery } from "react-query";
import { useAxios } from "../../../hooks/useAxios";
import Maping3 from "./maping3";
import UserModal from "../common/user-modal";
const Building3 = () => {
  const axios = useAxios();
  const { isLoading, data } = useQuery(
    "accsidint/3",
    () => {
      return axios({ url: "/accomodation/3/room" });
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
  const navigate = useNavigate();
  return (
    <Wrapper>
      <UserModal />
      <Wrapper.Title>
        <LeftIcon onClick={() => navigate("/building-control/luxury-rooms")} />2
        Building
      </Wrapper.Title>
      <Wrapper.Container>
        {isLoading ? <Spin /> : <Maping3 />}
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Building3;
