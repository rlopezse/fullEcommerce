const Equipos = ({ data }) => {
  const { name, year } = data;
  return (
    <p className="equipos-nombre">
      <em>Nombre Celular:</em> {name} <br /> <em>year:</em> {year}{" "}
    </p>
  );
};

export default Equipos;
