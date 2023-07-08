import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lógica para obtener los productos de la API
    // y actualizar el estado de 'products' usando setProducts

    // Ejemplo de cómo actualizar el estado de 'products' con datos de la API
    fetch('https://api.themoviedb.org/3/movie/${id}?api_key=600218396a35112d0aca91a392487907')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

