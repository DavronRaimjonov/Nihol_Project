import { Wrapper } from "../home/style";
import { Ordinary, Luxury, Mansion, LeftIcon } from "../../assets";
import Card from "../../Generic/card/card";
import { Outlet, useNavigate, useOutlet, useLocation } from "react-router-dom";
import { useTransition } from "react";

const BuildingControl = () => {
  const navigate = useNavigate();
  const hasOutlet = useOutlet();
  const { pathname } = useLocation();
  const { t } = useTransition();
  return (
    <Wrapper>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <Wrapper.Title>
            <LeftIcon onClick={() => navigate(`/`)} />
            Building Types
          </Wrapper.Title>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/ordinary-rooms`)}
              title={"Ordinary Rooms"}
              image={Ordinary}
            />
            <Card
              onClcik={() => navigate(`${pathname}/luxury-rooms`)}
              title={"Luxury Rooms"}
              image={Luxury}
            />
          </Wrapper.Container>
          <Wrapper.Container>
            <Card
              onClcik={() => navigate(`${pathname}/cotteges`)}
              title={"Cottages"}
              image={Mansion}
            />
          </Wrapper.Container>
        </>
      )}
    </Wrapper>
  );
};

export default BuildingControl;
