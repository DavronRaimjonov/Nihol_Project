import styled from "styled-components";

export const ObservingWrap = styled.div`
  padding-top: 10px;
  width: 100%;
`;
ObservingWrap.List = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgb(245, 245, 245);
  padding: 15px 0 5px 0;
`;
ObservingWrap.Key = styled.div`
  flex: 1 1 0%;
  text-align: start;
`;
ObservingWrap.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
`;
