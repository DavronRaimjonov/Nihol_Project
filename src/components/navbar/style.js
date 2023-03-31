import styled from "styled-components";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
export const Wrapper = styled.nav`
  background: rgb(255, 255, 255);
  width: 100%;
  padding: 0px 10%;
  height: 70px;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

Wrapper.Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #000;
`;
Wrapper.Avatar = styled(Avatar)`
  cursor: pointer;
  background: rgb(245, 106, 0);
  font-size: 16px;
`;
