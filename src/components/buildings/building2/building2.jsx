import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { Wrapper } from "../../home/style";
import { Spin } from "antd";
import { useQuery } from "react-query";
import { useAxios } from "../../../hooks/useAxios";
import Maping from "./maping";
import UserModal from "./common/user-modal";
const Building2 = () => {
  const axios = useAxios();
  const { isLoading } = useQuery(
    "accsidint/2",
    () => {
      return axios({ url: "/accomodation/2/room" });
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
  // console.log(data);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <UserModal />
      <Wrapper.Title>
        <LeftIcon
          onClick={() => navigate("/building-control/ordinary-rooms")}
        />
        2 Building
      </Wrapper.Title>
      <Wrapper.Container>{isLoading ? <Spin /> : <Maping />}</Wrapper.Container>
    </Wrapper>
  );
};

export default Building2;
