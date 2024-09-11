import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Крафтовое мыло' },
  { id: 2, name: 'Эко-свечи' }
];

const categories = ['Мыло', 'Свечи', 'Эко-продукты'];

const news = [
  { id: 1, title: 'Новые поступления' },
  { id: 2, title: 'Скидки на эко-свечи' }
];

function HomePage() {
  return (
    <div className="home-page">
      <h1>Добро пожаловать в Магазин крафтовых товаров</h1>
      <p>Мы предлагаем только лучшие крафтовые товары, созданные с заботой о природе и людях. Ознакомьтесь с нашими категориями товаров, новостями и информацией о товарах ниже.</p>

      <h2>Товары:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Категории:</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <h2>Новости:</h2>
      <ul>
        {news.map(newsItem => (
          <li key={newsItem.id}>
            <Link to={`/news/${newsItem.id}`}>{newsItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;