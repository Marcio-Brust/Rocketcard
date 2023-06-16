import { useState } from "react";
import { ButtonCard } from "./Button.style";
import { colors } from "../Colors/Colors";

export const Button = () => {
  const [color, setColor] = useState<string>("");
  const [cont, setCont] = useState(0);
  if (cont > 53) setCont(0);

  const handleColor = () => {
    setCont(cont + 1);
    const colorsFilter = colors
      .filter((item, index) => index === cont)
      .toString();
    setColor(colorsFilter);
  };

  return (
    <>
      <ButtonCard color={color} onClick={handleColor}>
        Gerar backgound
      </ButtonCard>
    </>
  );
};
