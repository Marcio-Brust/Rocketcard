import { CardDiv } from "./Card.style";
import { CardDados } from "../CardDados/CardDados";
import { HeaderCard } from "../HeaderCard/HeaderCard";
import { ImgPerfil } from "../ImgPerfil";
import { Footer } from "../Footer/Footer";

export const Card = () => {
  return (
    <CardDiv>
      <HeaderCard />
      <ImgPerfil />
      <CardDados />
      <Footer />
    </CardDiv>
  );
};
