import Data from "./types";

const Equipos = ({ name, year }: Data) => {
  const nombre = name;
  const anio = year;

  return (
    <p className="equipos-nombre">
      <em>Nombre Celular:</em> {nombre} <br /> <em>year:</em> {anio}
    </p>
  );
};

export default Equipos;
