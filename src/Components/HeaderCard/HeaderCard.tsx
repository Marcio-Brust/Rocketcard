import { useFetch } from "../../Hooks/useFetch";
import { HeaderCd } from "../HeaderCard/HeaderCard.style";
import logo from "../../assets/logo.svg";
import { Img } from "../CardDados/CardDados.style";

export const HeaderCard = () => {
  const api = "https://api.github.com/users/Marcio-Brust";

  const { data } = useFetch(api);

  return (
    <HeaderCd>
      <Img
        style={{
          boxSizing: "border-box",
          width: "40px",
          height: "35px",
          border: "solid 1.5px #f1f1f1",
          borderRadius: "100%",
          padding: "5px",
        }}
        src={logo}
        alt="logo"
      />{" "}
      <p>{data?.login}</p>
    </HeaderCd>
  );
};
