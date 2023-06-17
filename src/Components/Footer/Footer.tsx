import { FooterCard } from "./Footer.style";
import logo from "../../assets/logo.svg";
import { Img } from "../CardDados/CardDados.style";

export const Footer = () => {
  return (
    <FooterCard>
      <Img
        style={{
          boxSizing: "border-box",
          width: "40px",
          height: "35px",
          padding: "5px",
        }}
        src={logo}
        alt="logo"
      />
      <p>ROCKETCARD</p>
    </FooterCard>
  );
};
