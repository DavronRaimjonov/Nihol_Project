import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Wrapper } from "../../home/style";
const Cottages = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleCard>
        <LeftIcon onClick={() => navigate("/building-control")} />
        Cottages
      </TitleCard>
    </Wrapper>
  );
};

export default Cottages;
