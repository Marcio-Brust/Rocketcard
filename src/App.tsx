import { useState } from "react";
import { Card } from "./Components/Card";
import { CardDivShadow } from "./Components/Card.style";

function App() {
  return (
    <section
      style={{
        background: "#000000",
        width: "100%",
        height: "100vh",
        color: "##f1f1f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardDivShadow>
        {" "}
        <Card />
      </CardDivShadow>
    </section>
  );
}

export default App;
