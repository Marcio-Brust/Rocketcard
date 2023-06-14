import { useFetch } from "../Hooks/useFetch";
import { HeaderCd } from "./HeaderCard.style";
import logo from "../assets/logo.svg";

export const HeaderCard = () => {
  const api = "https://api.github.com/users/Marcio-Brust";

  const { data } = useFetch(api);

  return (
    <HeaderCd>
      <img
        style={{
          boxSizing: "border-box",
          width: "40px",
          height: "40px",
          border: "solid 1px #f1f1f1",
          borderRadius: "50%",
          padding: "10px",
        }}
        src={logo}
        alt="logo"
      />{" "}
      <p>{data?.login}</p>
    </HeaderCd>
  );
};
