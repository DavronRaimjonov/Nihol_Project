import React from "react";
import { request } from "../../axios";
import { Wrapper } from "./style";
import { notify } from "../../Generic/notification";
import { useOpen } from "../../hooks/useOpen";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setLocal } from "../../utils/storege";
import { formatPhone } from "../../hooks/phoneFormat";

const Login = () => {
  const navigate = useNavigate();
  const { open, isOpen, isClose } = useOpen(false);
  const { open: load, isOpen: loadOpen, isClose: loadClose } = useOpen(false);
  const [formatPhoneNumber, setFormatPhoneNumber] = React.useState("");
  const phoneRef = React.useRef();
  const passwordRef = React.useRef();
  const reg = new RegExp("^[0-9]$");
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
    const phoneNumber =
      "+998" +
      phoneRef.current.input.value
        .split("")
        .filter((n) => reg.test(n))
        .join("");
    const password = passwordRef.current.input.value;
    if (!phoneNumber || !password) {
      notify({ erorStatus: "filingEror" });
      return playAnim();
    }
    let userInfo = { password, phoneNumber };
    try {
      loadOpen();
      const { data } = await request.post("/user/sign-in", userInfo);
      setLocal("token", data.data.token);
      navigate("/");
      loadClose();
    } catch (error) {
      const status = error?.response?.status;
      if (status >= 400) notify({ erorStatus: status });
      loadClose();
    }
  };
  const phoneFromatterNumber = (e) => {
    setFormatPhoneNumber(formatPhone(e.target.value));
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
          value={formatPhoneNumber}
          bordered={false}
          onChange={phoneFromatterNumber}
          placeholder={"99 999 99 99"}
          type={"text"}
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
