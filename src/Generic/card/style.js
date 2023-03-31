import styled from "styled-components";

export const CardWrap = styled.div`
  width: 250px;
  height: 250px;
  cursor: pointer;
  border-radius: 17px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
  @media (max-width: 675px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 507px) {
    width: 150px;
    height: 150px;
  }
`;

CardWrap.Title = styled.div`
  padding-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: rgb(0, 0, 0);
  @media (max-width: 675px) {
    font-size: 16px;
  }
  @media (max-width: 507px) {
    font-size: 14px;
  }
`;
CardWrap.CardWrapImg = styled.img`
  width: 133px;
  height: 192px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  @media (max-width: 675px) {
    width: 100px;
    height: 150px;
  }
  @media (max-width: 507px) {
    width: 70px;
    height: 100px;
  }
`;
