import ProductProps from "./types";

type Eq = {
  product: ProductProps;
};

const Product = ({ product }: Eq) => {
  return (
    <p className="equipos-nombre">
      <em>id:</em> {product.id} <br />
      <em>equipo:</em> {product.category} <br />
      <em>discount:</em> {product.discount} <br />
      <em>phone:</em> {product.phone} <br />
      <em>image:</em> {product.image} <br />
      <em>base_price:</em> {product.base_price} <br />
      <em>offer_price:</em> {product.offer_price} <br />
      <em>quotas:</em> {product.quotas} <br />
      <em>quotas_price:</em> {product.quotas_price} <br />
      <em>label:</em> {product.label}
    </p>
  );
};

export default Product;
