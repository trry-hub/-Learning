import React from "react";
import ReactDOM from "react-dom";
import App from "./layout/App.js"

import Hello from './components/TabBar'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

