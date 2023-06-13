import React from "react";
import { Cdados, InfoDados } from "./CardDados.style";
import { useFetch } from "../Hooks/useFetch";
import followers from "../assets/followers.svg";
import following from "../assets/following.svg";
import repository from "../assets/repository.svg";
import company from "../assets/company.svg";
import location from "../assets/location.svg";

export const CardDados = () => {
  const api = "https://api.github.com/users/Marcio-Brust";

  const { data } = useFetch(api);

  return (
    <Cdados>
      <img src={followers} alt="followers" />
      <InfoDados>
        <p>{data?.followers} </p> <p>Seguidores</p>
      </InfoDados>
      <img src={following} alt="following" />
      <InfoDados>
        <p>{data?.followers}</p> <p>Seguindo</p>
      </InfoDados>
      <img src={repository} alt="repository" />
      <InfoDados>
        <p>{data?.public_repos} </p> <p>Repositórios</p>
      </InfoDados>
      <img src={company} alt="company" />
      <InfoDados>
        <p>{data?.company ? data.company : "Null"}</p>
      </InfoDados>
      <img src={location} alt="location" />
      <InfoDados>
        <p>{data?.location}</p>
      </InfoDados>
    </Cdados>
  );
};
