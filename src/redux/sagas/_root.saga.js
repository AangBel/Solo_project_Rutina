import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addTaskSaga from './addTaskSaga';

import saveTaskWatcher from './addTaskSaga';
import yieldSaga from './fetchAllTasksSaga';
import fetchAllTasksSaga from './fetchAllTasksSaga';
import taskStore from '../taskStore';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    //these two under here stopped causing an error with fetching login stuff when i took out the () to each!
    addTaskSaga, //adding addTask Saga here but does it actually go here? It is a saga...
    fetchAllTasksSaga, //once again... does it go here? lets find out! what happens to the "ADD_TASK" that went with it?
    saveTaskWatcher,
    taskStore,
    yieldSaga,
  ]);
}
