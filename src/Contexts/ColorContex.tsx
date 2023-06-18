import { ReactNode, createContext, useState } from "react";
import { colors } from "../Components/Colors/Colors";

type ColorContextTypes = {
  color: string;
  handleColor: (newState: string) => void;
};

const InitialValue = {
  color: "#000",
  handleColor: () => {
    ("");
  },
};

interface ChildProps {
  children: ReactNode;
}

export const ColorContext = createContext<ColorContextTypes>(InitialValue);

export function ColorContextProvider({ children }: ChildProps) {
  const [color, setColor] = useState(InitialValue.color);
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
