import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { Wrapper } from "../../home/style";
import { Spin } from "antd";
import Maping from "./maping";
import UserModal from "../common/user-modal";
import { useQueryHandler } from "../../../hooks/useQuery";
const Building2 = () => {
  const useQuery = useQueryHandler();
  const { isLoading } = useQuery({
    url: "/accomodation/2/room",
    pathName: "accsidint/2",
  });
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
