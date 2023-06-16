import styled from "styled-components";

export const CardDiv = styled.div`
  background: #0e1218;
  height: 600px;
  width: 300px;
  border-radius: 50px;
  z-index: 3;
`;

export const CardDivShadow = styled(CardDiv)`
  background: #222;
  border: solid 1px #f1f1f1;
  height: 650px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
