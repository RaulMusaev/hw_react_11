import React from 'react';
import { useParams } from 'react-router-dom';

const productDetails = {
  1: { name: 'Крафтовое мыло', description: 'Это натуральное мыло, сделанное вручную из лучших ингредиентов. Подходит для всех типов кожи.' },
  2: { name: 'Эко-свечи', description: 'Эти свечи сделаны из натурального воска и не содержат вредных химических веществ. Прекрасно подходят для дома.' }
};

function ProductPage() {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <h2>Товар не найден!</h2>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductPage;