import img from "../assets/ImgMarcio.png";

export const ImgPerfil = () => {
  return (
    <>
      <img
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          position: "absolute",
          zIndex: "-1",
        }}
        src={img}
        alt="perfil"
      />
    </>
  );
};
