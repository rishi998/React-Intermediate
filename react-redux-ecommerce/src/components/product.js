import { useState, useEffect } from "react";

function Product() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setproducts(result));
  }, []);
  return (
    <>
      <h1>Product Dashboard</h1>
      {JSON.stringify(products)}
    </>
  );
}

export default Product;
