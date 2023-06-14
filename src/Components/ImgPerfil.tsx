import img from "../assets/ImgMarcio.png";

export const ImgPerfil = () => {
  return (
    <>
      <img
        style={{
          width: "250px",
          height: "250px",
          display: "flex",
          position: "absolute",
          zIndex: "-1",
          marginTop: "50px",
          marginLeft: "50px",
        }}
        src={img}
        alt="perfil"
      />
    </>
  );
};
