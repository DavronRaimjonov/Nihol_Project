import styled from "styled-components";
import { Button } from "antd";
export const WrapperFound = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: 20px;
`;
WrapperFound.Image = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
WrapperFound.Title = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5714285714285714;
  text-align: center;
  margin: 20px 0;
`;

WrapperFound.Button = styled(Button)``;
