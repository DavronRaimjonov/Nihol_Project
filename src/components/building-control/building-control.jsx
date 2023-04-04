import { Wrapper } from "../home/style";
import { Ordinary, Luxury, Mansion } from "../../assets";
import Card from "../../Generic/card/card";
import { useNavigate } from "react-router-dom";

const BuildingControl = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Title>Building Types</Wrapper.Title>
      <Wrapper.Container>
        <Card
          onClcik={() => navigate("/building-control/ordinary-rooms")}
          title={"Ordinary Rooms"}
          image={Ordinary}
        />
        <Card
          onClcik={() => navigate("/middle-users")}
          title={"Luxury Rooms"}
          image={Luxury}
        />
      </Wrapper.Container>
      <Wrapper.Container>
        <Card title={"Cottages"} image={Mansion} />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default BuildingControl;
