import { useState, useEffect } from "react";
import Equipos from "./components/Equipos";

import "./index.scss";

function App() {
  const [celulares, setCelulares] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://192.168.0.2/api/equipos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCelulares(data);
      });
  }, []);

  return (
    <>
      <section className="container">
        {celulares.map((item) => {
          return <Equipos data={item} key={item.name} />;
        })}
      </section>
    </>
  );
}

export default App;
