import { useLocation, useNavigate, useOutlet, Outlet } from "react-router-dom";
import { LeftIcon } from "../../../assets";
import { TitleCard } from "../../../Generic/style";
import { Building } from "../../../assets";
import Card from "../../../Generic/card/card";
import { Wrapper } from "../../home/style";
const LuxuryRooms = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hasOutlet = useOutlet();
  return (
    <Wrapper>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <TitleCard>
            <LeftIcon onClick={() => navigate("/building-control")} />
            Luxury Rooms
          </TitleCard>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/3`)}
              title={"3 Building"}
              image={Building}
            />
            <Card title={"5 Building"} image={Building} />
          </Wrapper.Container>
        </>
      )}
    </Wrapper>
  );
};

export default LuxuryRooms;
