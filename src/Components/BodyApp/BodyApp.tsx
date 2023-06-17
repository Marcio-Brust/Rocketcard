import { Button } from "../Button/Button";
import { CardDivShadow } from "../CardDivShadow/CardDivShadow";
import { BodyAppStyle } from "./BodyApp.style";
import useMedia from "../../Hooks/useMedia";

export const BodyApp = () => {
  const mobile = useMedia("(max-width: 50rem)");
  if (mobile) {
    return (
      <BodyAppStyle
        style={{ display: "grid", marginTop: "10px", marginBottom: "10px" }}
      >
        <CardDivShadow />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "80px 1fr",
            justifyItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", alignSelf: "start" }}>
            Customizar Rocketcard
          </h1>
          <Button />
        </div>
      </BodyAppStyle>
    );
  } else {
    return (
      <BodyAppStyle>
        <CardDivShadow />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "300px 1fr",
            justifyItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", alignSelf: "end" }}>
            Customizar Rocketcard
          </h1>
          <Button />
        </div>
      </BodyAppStyle>
    );
  }
};
