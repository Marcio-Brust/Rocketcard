import { useContext } from "react";
import { Card } from "../Card/Card";
import { CardDivSh } from "./CardDivShadow.style";
import { ColorContext } from "../../Contexts/ColorContex";

export const CardDivShadow = () => {
  const { color } = useContext(ColorContext);
  return (
    <CardDivSh color={color}>
      <Card />
    </CardDivSh>
  );
};
