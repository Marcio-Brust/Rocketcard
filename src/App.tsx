import { Card } from "./Components//Card/Card";
import { Button } from "./Components/Button/Button";
import { CardDivShadow } from "./Components/Card/Card.style";

function App() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        boxSizing: "border-box",
        marginTop: "50px",
      }}
    >
      <CardDivShadow>
        {" "}
        <Card />
      </CardDivShadow>
      <div
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        <Button />
      </div>
    </section>
  );
}

export default App;
