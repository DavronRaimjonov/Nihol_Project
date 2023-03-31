import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 50px;
  width: 100%;
`;
Wrapper.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;
  margin-bottom: 50px;
  @media (max-width: 675px) {
    gap: 80px;
  }
  @media (max-width: 507px) {
    gap: 50px;
  }
  @media (max-width: 383px) {
    flex-direction: column;
  }
`;
Wrapper.Title = styled.h1`
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
  @media (max-width: 675px) {
    font-size: 30px;
  }
  @media (max-width: 507px) {
    font-size: 26px;
  }
  @media (max-width: 383px) {
    font-size: 22px;
  }
`;
