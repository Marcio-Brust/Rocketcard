import { ReactNode, createContext, useState } from "react";
import { colors } from "../Components/Colors/Colors";

const InitialValue = {
  color: "#000",

  handleColor: () => {
    ("");
  },
};

interface ChildProps {
  children: ReactNode;
}

export const ColorContext = createContext(InitialValue);

export function ColorContextProvider({ children }: ChildProps) {
  const [color, setColor] = useState<string>("");
  const [cont, setCont] = useState(0);
  if (cont > 53) setCont(0);

  const handleColor = () => {
    setCont(cont + 1);
    const colorsFilter = colors
      .filter((_item, index) => index === cont)
      .toString();
    setColor(colorsFilter);
  };

  return (
    <ColorContext.Provider value={{ color, handleColor }}>
      {children}
    </ColorContext.Provider>
  );
}
