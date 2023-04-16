import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Building } from "../../../assets";
import Card from "../../../Generic/card/card";
import { Wrapper } from "../../home/style";
const OrdinaryRooms = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleCard>
        <LeftIcon onClick={() => navigate("/building-control")} />
        Ordinary Rooms
      </TitleCard>
      <Wrapper.Container>
        <Card title={"2 Building"} image={Building} />
        <Card title={"4 Building"} image={Building} />
      </Wrapper.Container>
      <Wrapper.Container>
        <Card title={"6 Building"} image={Building} />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default OrdinaryRooms;
