import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>Страница не найдена!</h1>
      <p>Похоже, что вы попытались зайти на несуществующую страницу. Пожалуйста, вернитесь на <Link to="/">главную страницу</Link>.</p>
    </div>
  );
}

export default NotFoundPage;