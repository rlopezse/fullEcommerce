import EquipoProps from "./types";

type Eq = {
  equipo: EquipoProps;
};

const Equipos = ({ equipo }: Eq) => {
  return (
    <p className="equipos-nombre">
      <em>id:</em> {equipo.id} <br />
      <em>equipo:</em> {equipo.category} <br />
      <em>discount:</em> {equipo.discount} <br />
      <em>phone:</em> {equipo.phone} <br />
      <em>image:</em> {equipo.image} <br />
      <em>base_price:</em> {equipo.base_price} <br />
      <em>offer_price:</em> {equipo.offer_price} <br />
      <em>quotas:</em> {equipo.quotas} <br />
      <em>quotas_price:</em> {equipo.quotas_price} <br />
      <em>label:</em> {equipo.label}
    </p>
  );
};

export default Equipos;
