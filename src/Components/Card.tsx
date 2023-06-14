import { CardDiv } from "./Card.style";
import { CardDados } from "./CardDados";
import { HeaderCard } from "./HeaderCard";
import { ImgPerfil } from "./ImgPerfil";

export const Card = () => {
  return (
    <CardDiv>
      <HeaderCard />
      <ImgPerfil />
      <CardDados />
    </CardDiv>
  );
};
