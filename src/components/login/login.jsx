import React from "react";
import { request } from "../../axios";
import { Wrapper } from "./style";
import { notify } from "../../Generic/notification";
import { useOpen } from "../../hooks/useOpen";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { formatPhone } from "../../Generic/phoneFormat";
import { useSignIn } from "react-auth-kit";
import { useAxios } from "../../hooks/useAxios";
import { setLocal } from "../../utils/storege";
const Login = () => {
  const axios = useAxios();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { open, isOpen, isClose } = useOpen(false);
  const { open: load, isOpen: loadOpen, isClose: loadClose } = useOpen(false);
  const [formatPhoneNumber, setFormatPhoneNumber] = React.useState("");
  const passwordRef = React.useRef();
  const playAnim = () => {
    isOpen();
    setTimeout(() => {
      isClose();
    }, 1000);
  };

  const keyDownDetect = (e) => {
    if (e.key === "Enter" || e.type === "click") return authInfo();
  };

  const authInfo = async () => {
    if (load) return;
    const phoneNumber = "+998" + formatPhoneNumber.replace(/[^\d]/g, "");
    const password = passwordRef.current.input.value;
    if (!phoneNumber || !password) {
      notify({ erorStatus: "filingEror" });
      return playAnim();
    }
    let userInfo = { password, phoneNumber };
    try {
      loadOpen();
      // const { data } = await request.post("/user/sign-in", userInfo);
      let response = await axios({
        url: "/user/sign-in",
        method: "POST",
        body: userInfo,
      });
      const { token, user } = response.data.data;
      signIn({
        token: token,
        authState: user,
        tokenType: "Bearer",
        expiresIn: 4000,
      });
      setLocal("token", token);
      navigate("/");
      loadClose();
    } catch (error) {
      const status = error?.response?.status;
      if (status >= 400) notify({ erorStatus: status });
      loadClose();
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
          addonBefore={"+998"}
          value={formatPhoneNumber}
          bordered={false}
          onChange={(e) => setFormatPhoneNumber(formatPhone(e.target.value))}
          placeholder={"(99) 999-99-99"}
        />
        <Wrapper.InputPassword
          ref={passwordRef}
          bordered={false}
          placeholder={"Parol..."}
          onKeyDown={keyDownDetect}
        />
        <Wrapper.Button onClick={keyDownDetect} warningAnimation={open}>
          {load ? <LoadingOutlined /> : "Login"}
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
