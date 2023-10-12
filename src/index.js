// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

// import store from "./redux/store";

// import App from "./components/App/App";
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// // Provider allows us to use redux within our react app
// import logger from "redux-logger";
// // Import saga middleware
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./redux/sagas/_root.saga";

// const sagaMiddleware = createSagaMiddleware();

// // Pass rootSaga into our sagaMiddleware
// // sagaMiddleware.run(rootSaga);

// const root = ReactDOM.createRoot(document.getElementById("react-root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);