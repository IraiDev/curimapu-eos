import React from 'react';
import ReactDOM from 'react-dom';
import { UiController } from './context/UiController';
import { App } from './App';
import './index.css';
import './style.css';
import "@material-tailwind/react/tailwind.css";

ReactDOM.render(
  <React.StrictMode>
    <UiController>
      <App />
    </UiController>
  </React.StrictMode>,
  document.getElementById('root')
);