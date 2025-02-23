import { useState, useEffect } from "react";
import Equipos from "./components/Equipos";
import EquiposProps from "./components/Equipos/types";

import "./index.scss";

function App() {
  const [celulares, setCelulares] = useState<EquiposProps[]>([]);
  useEffect(() => {
    fetch("http://192.168.0.2/api/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCelulares(data);
      });
  }, []);

  return (
    <>
      <section className="container">
        {celulares.map((item) => {
          return <Equipos equipo={item} key={item.id} />;
        })}
      </section>
    </>
  );
}

export default App;
