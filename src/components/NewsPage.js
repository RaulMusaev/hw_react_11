import React from 'react';
import { Link } from 'react-router-dom';

const news = [
  { id: 1, title: 'Новые поступления' },
  { id: 2, title: 'Скидки на эко-свечи' }
];

function NewsPage() {
  return (
    <div className="news-page">
      <h1>Новости магазина</h1>
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

export default NewsPage;