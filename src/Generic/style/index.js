import styled from "styled-components";
import { Tag } from "antd";
export const DrowDownContentWrap = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const TitleCard = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px;
`;
export const DropdownCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MapWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  border-radius: 12px;
  padding: 10px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
  margin-top: 40px;
  width: 300px;
  margin: 0 auto;
`;

export const MapWrapperCart = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid rgb(147, 149, 150);
  border-radius: 12px;
`;

MapWrapperCart.Title = styled.div`
  margin-top: 10px;
`;

MapWrapperCart.Container = styled.div`
  margin: 10px auto;
  width: 120px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Room = styled(Tag)`
  position: relative;
  margin: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;
