import React from "react";
import { Wrapper } from "./style";
import Card from "../../Generic/card/card";
import { AllUser, HalfTime, StartTime, Empty, Report } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Wrapper.Title>{t("home_page.title")}:</Wrapper.Title>
      <Wrapper.Container>
        <Card
          onClcik={() => navigate("/all-users")}
          title={t("home_page.card_title_first")}
          image={AllUser}
        />

        <Card
          onClcik={() => navigate("/half-time")}
          title={t("home_page.card_title_second")}
          image={HalfTime}
        />
      </Wrapper.Container>
      <Wrapper.Container>
        <Card
          onClcik={() => navigate("/time-up")}
          title={t("home_page.card_title_third")}
          image={StartTime}
        />
        <Card
          onClcik={() => navigate("/building-control")}
          title={t("home_page.card_title_four")}
          image={Empty}
        />
      </Wrapper.Container>
      <Wrapper.Title>{t("home_page.second_title")}:</Wrapper.Title>
      <Wrapper.Container>
        <Card
          onClcik={() => navigate("/repost")}
          title={t("home_page.card_title_seven")}
          image={Report}
        />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Home;
