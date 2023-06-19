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
  cont: 0,
};

interface ChildProps {
  children: ReactNode;
}

export const ColorContext = createContext<ColorContextTypes>(InitialValue);

export function ColorContextProvider({ children }: ChildProps) {
  const [color, setColor] = useState(InitialValue.color);
  const [cont, setCont] = useState(InitialValue.cont);
  if (cont > 53) setCont(InitialValue.cont);

  const handleColor = () => {
    setCont(cont + 1);

    setColor(colors.filter((_item, index) => index === cont).toString());
  };

  return (
    <ColorContext.Provider value={{ color, handleColor }}>
      {children}
    </ColorContext.Provider>
  );
}
