import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { Wrapper } from "../../home/style";
import { Spin } from "antd";
import Maping3 from "./maping3";
import UserModal from "../common/user-modal";
import { useQueryHandler } from "../../../hooks/useQuery";
import CreatedUserModal from "../common/created-user-modal";
import { useTranslation } from "react-i18next";
const Building3 = () => {
  const useQuery = useQueryHandler();
  const { isLoading } = useQuery({
    url: "/accomodation/3/room",
    pathName: "accsidint/3",
  });
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <UserModal />
      <CreatedUserModal />
      <Wrapper.Title>
        <LeftIcon onClick={() => navigate("/building-control/luxury-rooms")} />
        {`3 ${t("rooms.card_title")}`}
      </Wrapper.Title>
      <Wrapper.Container>
        {isLoading ? <Spin /> : <Maping3 />}
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Building3;
