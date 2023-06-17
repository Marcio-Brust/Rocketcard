import { useEffect, useState } from "react";
import { ButtonCard } from "./Button.style";
import { colors } from "../Colors/Colors";

export const Button = () => {
  const [color, setColor] = useState<string>("");
  const [cont, setCont] = useState(0);
  if (cont > 53) setCont(0);

  useEffect(() => {
    const borderColor = document.querySelector(".borderColor");
    borderColor?.setAttribute("style", `backGround: ${color}`);
  }, [color]);

  const handleColor = () => {
    setCont(cont + 1);
    const colorsFilter = colors
      .filter((_item, index) => index === cont)
      .toString();
    setColor(colorsFilter);
  };

  return (
    <>
      <ButtonCard onClick={handleColor}>Gerar backgound</ButtonCard>
    </>
  );
};
