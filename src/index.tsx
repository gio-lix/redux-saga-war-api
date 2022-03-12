import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./redux/store";

ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />} />
              </Routes>
          </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);

