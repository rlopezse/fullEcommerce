import { useState, useEffect } from "react";
import Products from "./components/Products";
import ProductsProps from "./components/Products/types";
import "./App.css";

function App() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  useEffect(() => {
    fetch("http://192.168.0.2/api/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <section className="w-fullflex flex-wrap">
        {products.map((item) => {
          return <Products product={item} key={item.id} />;
        })}
      </section>
    </>
  );
}

export default App;
