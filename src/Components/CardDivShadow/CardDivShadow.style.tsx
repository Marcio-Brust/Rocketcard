import styled from "styled-components";

export const CardDivSh = styled.div`
  background: ${({ color }) => (color ? color : "#000")};
  border-radius: 50px;
  border: solid 1px #f1f1f1;
  height: 650px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
