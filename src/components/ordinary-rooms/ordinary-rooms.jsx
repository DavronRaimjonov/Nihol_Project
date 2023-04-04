import { Wrapper } from "../home/style";
import { Building, LeftIcon } from "../../assets";
import Card from "../../Generic/card/card";
import { Link, useNavigate } from "react-router-dom";
import Prev from "../../Generic/Prev/Prev";
import { TitleCard } from "../../Generic/style";
const OrdinaryRooms = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TitleCard>
        <Prev path={"/building-control"} />
        Ordinary Rooms
      </TitleCard>
      <Wrapper.Container>
        <Card
          onClcik={() => navigate("/building-control/ordinary-rooms")}
          title={"2 Building"}
          image={Building}
        />
        <Card
          onClcik={() => navigate("/middle-users")}
          title={"4 Building"}
          image={Building}
        />
      </Wrapper.Container>
      <Wrapper.Container>
        <Card title={"6 Building"} image={Building} />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default OrdinaryRooms;
