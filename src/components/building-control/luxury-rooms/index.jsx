import { useLocation, useNavigate, useOutlet, Outlet } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Building } from "../../../assets";
import Card from "../../../Generic/card/card";
import { Wrapper } from "../../home/style";
import { useTranslation } from "react-i18next";
const LuxuryRooms = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  const { t } = useTranslation();
  return (
    <Wrapper>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <TitleCard>
            <LeftIcon onClick={() => navigate("/building-control")} />
            {t("building_types.card_luxury")}
          </TitleCard>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/3`)}
              title={`3 ${t("rooms.card_title")}`}
              image={Building}
            />
            <Card title={`5 ${t("rooms.card_title")}`} image={Building} />
          </Wrapper.Container>
        </>
      )}
    </Wrapper>
  );
};

export default LuxuryRooms;
