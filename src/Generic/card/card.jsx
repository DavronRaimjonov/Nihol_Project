import React from "react";
import { CardWrap } from "./style";

const Card = ({ title, image, onClcik }) => {
  return (
    <CardWrap onClick={onClcik}>
      <CardWrap.Title>{title}</CardWrap.Title>
      <CardWrap.CardWrapImg src={image} alt="home svg" />
    </CardWrap>
  );
};

export default Card;
