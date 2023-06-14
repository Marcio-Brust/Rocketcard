import { Cdados, Img, InfoDados, P } from "./CardDados.style";
import { useFetch } from "../../Hooks/useFetch";
import followers from "../../assets/followers.svg";
import following from "../../assets/following.svg";
import repository from "../../assets/repository.svg";
import company from "../../assets/company.svg";
import location from "../../assets/location.svg";

export const CardDados = () => {
  const api = "https://api.github.com/users/Marcio-Brust";

  const { data } = useFetch(api);

  return (
    <Cdados>
      <Img src={followers} alt="followers" />
      <InfoDados>
        <P>{data?.followers} </P> <P>Seguidores</P>
      </InfoDados>
      <Img src={following} alt="following" />
      <InfoDados>
        <P>{data?.followers}</P> <P>Seguindo</P>
      </InfoDados>
      <Img src={repository} alt="repository" />
      <InfoDados>
        <P>{data?.public_repos} </P> <P>Repositórios</P>
      </InfoDados>
      <Img src={company} alt="company" />
      <InfoDados>
        <P>{data?.company ? data.company : "-"}</P>
      </InfoDados>
      <Img src={location} alt="location" />
      <InfoDados>
        <P>{data?.location}</P>
      </InfoDados>
    </Cdados>
  );
};
