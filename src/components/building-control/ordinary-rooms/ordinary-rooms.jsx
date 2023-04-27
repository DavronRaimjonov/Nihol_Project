import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Building } from "../../../assets";
import Card from "../../../Generic/card/card";
import { Wrapper } from "../../home/style";
import { Outlet, useOutlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const OrdinaryRooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const hasOutlet = useOutlet();
  const { pathname } = useLocation();
  return (
    <Wrapper>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <TitleCard>
            <LeftIcon onClick={() => navigate("/building-control")} />
            {t("ordinary_rooms.title")}
          </TitleCard>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/2`)}
              title={t("ordinary_rooms.card_2")}
              image={Building}
            />
            <Card
              title={t("ordinary_rooms.card_4")}
              onClcik={() => navigate(`${pathname}/4`)}
              image={Building}
            />
          </Wrapper.Container>
          <Wrapper.Container>
            <Card title={t("ordinary_rooms.card_6")} image={Building} />
          </Wrapper.Container>
        </>
      )}
    </Wrapper>
  );
};

export default OrdinaryRooms;
