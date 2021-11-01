/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import dotenv from "dotenv";
import { fetchConfigs } from './consts';
import "antd/dist/antd.css";
import "./index.css";

dotenv.config();

fetchConfigs().then(() => {
  import('./App').then(({ default: App }) => render(App))
});

const render = (App) => {
  return ReactDOM.render(<App/>, document.getElementById('root'))
};
reportWebVitals();
