import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Wrapper } from "../../home/style";
const Cottages = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  return (
    <Wrapper>
      <TitleCard>
        <LeftIcon onClick={() => navigate("/building-control")} />
        {t('building_types.card_cotteges')}
      </TitleCard>
    </Wrapper>
  );
};

export default Cottages;
