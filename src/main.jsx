import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotFoundPageComponent } from './components';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotFoundPageComponent>такой страницы не существует</NotFoundPageComponent>
  </React.StrictMode>,
)
