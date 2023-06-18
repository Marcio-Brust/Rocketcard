import { useContext } from "react";
import { ButtonCard } from "./Button.style";
import { ColorContext } from "../../Contexts/ColorContex";

export const Button = () => {
  const { handleColor } = useContext(ColorContext);

  return (
    <>
      <ButtonCard onClick={handleColor}>Gerar backgound</ButtonCard>
    </>
  );
};
