import { Button } from "../Button/Button";
import { CardDivShadow } from "../CardDivShadow/CardDivShadow";
import { BodyAppStyle } from "./BodyApp.style";
import useMedia from "../../Hooks/useMedia";
import { ColorContextProvider } from "../../Contexts/ColorContex";

export const BodyApp = () => {
  const mobile = useMedia("(max-width: 50rem)");

  return (
    <ColorContextProvider>
      <BodyAppStyle
        style={{
          boxSizing: "border-box",
          display: mobile ? "grid" : "",
          margin: mobile ? "40px 20px 0px 20px" : "15px  0px",
        }}
      >
        <CardDivShadow />
        <div
          style={{
            display: "grid",
            gridTemplateRows: mobile ? "80px 1fr" : "300px 1fr",
            justifyItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", alignSelf: mobile ? "start" : "end" }}>
            Customizar Rocketcard
          </h1>
          <Button />
        </div>
      </BodyAppStyle>
    </ColorContextProvider>
  );
};
