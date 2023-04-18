import { Wrapper } from "../home/style";
import { Ordinary, Luxury, Mansion, LeftIcon } from "../../assets";
import Card from "../../Generic/card/card";
import { Outlet, useNavigate, useOutlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BuildingControl = () => {
  const navigate = useNavigate();
  const hasOutlet = useOutlet();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <Wrapper>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <Wrapper.Title>
            <LeftIcon onClick={() => navigate(`/`)} />
            {t("building_types.title")}
          </Wrapper.Title>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/ordinary-rooms`)}
              title={t("building_types.card_ordinary")}
              image={Ordinary}
            />
            <Card
              onClcik={() => navigate(`${pathname}/luxury-rooms`)}
              title={t("building_types.card_luxury")}
              image={Luxury}
            />
          </Wrapper.Container>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/cotteges`)}
              title={t("building_types.card_cotteges")}
              image={Mansion}
            />
          </Wrapper.Container>
        </>
      )}
    </Wrapper>
  );
};

export default BuildingControl;
