import { useEffect, useState } from "react";
import { ButtonCard } from "./Button.style";

export const Button = () => {
  const [color, setColor] = useState<number>();

useEffect(()=>{

},[])
  const handleColor = () => {
    const cor = Math.floor(Math.random() * 999);
    setColor(cor);
  };

  return (
    <>
      <ButtonCard onClick={handleColor}>Gerar backgound</ButtonCard>
    </>
  );
};
