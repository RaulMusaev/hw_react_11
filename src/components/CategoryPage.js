import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Мыло', 'Свечи', 'Эко-продукты'];

function CategoryPage() {
  return (
    <div className="category-page">
      <h1>Категории товаров</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;