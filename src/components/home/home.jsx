import React from "react";
import { Wrapper } from "./style";
import Card from "../../Generic/card/card";
import { AllUser, HalfTime, StartTime, Empty, Report } from "../../assets";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Title>Sections:</Wrapper.Title>
      <Wrapper.Container>
        <Card
          onClcik={() => navigate("/all-users")}
          title={"All users"}
          image={AllUser}
        />

        <Card
          onClcik={() => navigate("/middle-users")}
          title={"Half time"}
          image={HalfTime}
        />
      </Wrapper.Container>
      <Wrapper.Container>
        <Card title={"Time up"} image={StartTime} />
        <Card
          onClcik={() => navigate("/building-control")}
          title={"Empty places"}
          image={Empty}
        />
      </Wrapper.Container>
      <Wrapper.Title>Reports:</Wrapper.Title>
      <Wrapper.Container>
        <Card title={"Report"} image={Report} />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Home;
