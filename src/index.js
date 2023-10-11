import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// Provider allows us to use redux within our react app
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";

function* rootSaga() {
  yield takeEvery("GET_TASKS", fetchAllTasks);
  yield takeEvery("ADD_TASK", addTaskSaga);
}

function* fetchAllTasks() {
  // get all tasks from the DB
  try {
    const fetchTasks = yield axios.get("/api/tasks");
    //is it fetchTasks.data or fetchTasks?
    console.log("get all:", fetchTasks.data);
    yield put({ type: 'SET_TASKS', payload: fetchTasks.data});
  } catch {
    console.log("get all error");
  }
}
//payload or taskConst?
function* addTaskSaga(payload) {
  console.log('this is payload', payload);

  console.log('this is task name', payload.task_name);
  console.log('this is payload.taskTimeStart', payload.taskTimeStart);
  console.log('this is payload.taskTimeEnd', payload.taskTimeEnd);
  try {
    const newRoutine = payload;
  // send the task to the DB
  yield axios.post("/tasks", newRoutine);
  // update the store with the new task
  // TODO fetch function here
  fetchAllTasks();
} catch {
  console.log("get tasks error");
}
}
const sagaMiddleware = createSagaMiddleware();

// Used to store 
const taskStore = (state = [], action) => {
  switch (action.type) {
      case 'SET_TASKS':
          return action.payload;
      default:
          return state;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
      taskStore,
  }),
  // Add sagaMiddleware to our store
 composeEnhancers(applyMiddleware(sagaMiddleware, logger),
));

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
