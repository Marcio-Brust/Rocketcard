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
      <img style={{ display: "block" }} src={followers} alt="followers" />
      <InfoDados>
        <p style={{ fontSize: "0.8rem" }}>{data?.followers} </p>{" "}
        <p style={{ fontSize: "0.8rem" }}>Seguidores</p>
      </InfoDados>
      <img src={following} alt="following" />
      <InfoDados>
        <p style={{ fontSize: "0.8rem" }}>{data?.followers}</p>{" "}
        <p style={{ fontSize: "0.8rem" }}>Seguindo</p>
      </InfoDados>
      <img src={repository} alt="repository" />
      <InfoDados>
        <p style={{ fontSize: "0.8rem" }}>{data?.public_repos} </p>{" "}
        <p style={{ fontSize: "0.8rem" }}>Repositórios</p>
      </InfoDados>
      <img src={company} alt="company" />
      <InfoDados>
        <p style={{ fontSize: "0.8rem" }}>
          {data?.company ? data.company : "-"}
        </p>
      </InfoDados>
      <img src={location} alt="location" />
      <InfoDados>
        <p style={{ fontSize: "0.8rem" }}>{data?.location}</p>
      </InfoDados>
    </Cdados>
  );
};
