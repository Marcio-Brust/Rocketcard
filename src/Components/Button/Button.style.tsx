import styled from "styled-components";
import { CardDivShadow } from "../Card/Card.style";

export const ButtonCard = styled.button`
  height: 40px;
  width: 250px;
  border-radius: 10px;
  border-bottom: #1a1a1a;
  background: #0e1218;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: red;

    ${CardDivShadow} {
      background: red;
    }
  }
`;
