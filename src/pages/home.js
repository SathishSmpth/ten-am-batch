import React, { useEffect, useState } from "react";
import HorizontalCard from "../shared/horizontalCard";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row">
      {products.map((product, i) => (
        <HorizontalCard product={product} />
      ))}
    </div>
  );
}

export default Home;


