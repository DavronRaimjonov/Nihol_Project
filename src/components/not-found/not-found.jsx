import React from "react";
import { WrapperFound } from "./style";
import imgFound from "../../assets/images/not-found.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <WrapperFound>
      <WrapperFound.Image src={imgFound} alt="notFound" />
      <WrapperFound.Title>
        Kechirasz, siz tashrif buyurgan sayt mavjud emas.
      </WrapperFound.Title>
      <Link to={"/"}>
        <WrapperFound.Button type="primary">Asosiy bo'lim</WrapperFound.Button>
      </Link>
    </WrapperFound>
  );
};

export default NotFound;
