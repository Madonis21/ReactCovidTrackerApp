import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { masterReducer } from "./reducers/mainReducer";
import { interceptor } from '../src/service/httpService';
import thunk from 'redux-thunk';
import LogRocket from 'logrocket';

LogRocket.init('6egqfk/elcodigo');
const store = createStore(masterReducer, applyMiddleware(thunk));
interceptor(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
