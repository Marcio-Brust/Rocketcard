import styled from "styled-components";

export const ButtonCard = styled.button`
  height: 40px;
  width: 250px;
  border-radius: 10px;
  border-bottom: #1a1a1a;
  background: ${({ color }) => (color ? color : "#222")};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;
