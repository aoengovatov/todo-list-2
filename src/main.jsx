import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoSinglePageComponent } from './components';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoSinglePageComponent />
  </React.StrictMode>,
)
