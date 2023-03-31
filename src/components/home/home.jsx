import React from "react";
import { Wrapper } from "./style";
import Card from "../../Generic/card/card";
import { AllUser, HalfTime, StartTime, Empty, Report } from "../../assets";
const Home = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Sections:</Wrapper.Title>
      <Wrapper.Container>
        <Card title={"All users"} image={AllUser} />
        <Card title={"Half time"} image={HalfTime} />
      </Wrapper.Container>
      <Wrapper.Container>
        <Card title={"Time up"} image={StartTime} />
        <Card title={"Empty places"} image={Empty} />
      </Wrapper.Container>
      <Wrapper.Title>Reports:</Wrapper.Title>
      <Wrapper.Container>
        <Card title={"Report"} image={Report} />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Home;
