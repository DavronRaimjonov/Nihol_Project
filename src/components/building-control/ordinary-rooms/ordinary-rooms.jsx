import { useNavigate } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Building } from "../../../assets";
import Card from "../../../Generic/card/card";
import { Wrapper } from "../../home/style";
import { Outlet, useOutlet, useLocation } from "react-router-dom";
const OrdinaryRooms = () => {
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
            Ordinary Rooms
          </TitleCard>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/2`)}
              title={"2 Building"}
              image={Building}
            />
            <Card
              title={"4 Building"}
              onClcik={() => navigate(`${pathname}/4`)}
              image={Building}
            />
          </Wrapper.Container>
          <Wrapper.Container>
            <Card title={"6 Building"} image={Building} />
          </Wrapper.Container>
        </>
      )}
    </Wrapper>
  );
};

export default OrdinaryRooms;
