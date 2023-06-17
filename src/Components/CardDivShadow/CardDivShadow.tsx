import { Card } from "../Card/Card";
import { CardDivSh } from "./CardDivShadow.style";

export const CardDivShadow = () => {
  return (
    <CardDivSh className="borderColor">
      <Card />
    </CardDivSh>
  );
};
