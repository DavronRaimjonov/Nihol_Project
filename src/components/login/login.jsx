import React from "react";
import { request } from "../../axios";
import { Wrapper } from "./style";
import { notification } from "antd";

const Login = () => {
  const [warningAnimation, setWarningAnimation] = React.useState(false);
  const phoneRef = React.useRef();
  const passwordRef = React.useRef();
  const playAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  };
  const authInfo = () => {
    const phoneNumber = "+998" + phoneRef.current.input.value;
    const password = passwordRef.current.input.value;
    if (!phoneNumber || !password) {
      notification.error({
        message: "Пожалуйста заполните все поля!",
      });
      return playAnim();
    }
    let userInfo = { password, phoneNumber };
    try {
      const fetch = async () => {
        const response = await request.post("/user/sign-in", userInfo);
        console.log(response.data);
      };
      fetch();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
        </Wrapper.Description>
        <Wrapper.Input
          ref={phoneRef}
          addonBefore={"+998"}
          bordered={false}
          placeholder={"99 999 99 99"}
          type={"number"}
        />
        <Wrapper.InputPassword
          ref={passwordRef}
          bordered={false}
          placeholder={"Parol..."}
        />
        <Wrapper.Button onClick={authInfo} warningAnimation={warningAnimation}>
          Login
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
