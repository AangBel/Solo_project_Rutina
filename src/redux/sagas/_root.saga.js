import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addTaskSaga from './addTaskSaga';

import saveTaskWatcher from './addTaskSaga';
import yieldSaga from './fetchAllTasksSaga';
import fetchAllTasksSaga from './fetchAllTasksSaga';
// import taskStore from '../taskStore';
import taskReducer from '../reducers/taskReducer';
import selectReducer from '../reducers/select.reducer';
import yieldEdit from './editTaskSaga';
import selectedTaskToEdit from '../reducers/editTaskReducer';
import yieldDelete from './deleteTaskSaga';
import RightNow from '../../RightNow/RightNow';
import addBellSaga from './addBellSaga';
import deleteBellWatcher from './deleteBellSaga';
import fetchAllBellsSaga from './fetchAllBellsSaga';


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
    addTaskSaga(), //adding addTask Saga here but does it actually go here? It is a saga...
    fetchAllTasksSaga, //once again... does it go here? lets find out! what happens to the "ADD_TASK" that went with it?--- GET 500 error if add ()
    saveTaskWatcher,
    // taskStore,//this breaks the fetch user as it logs me out and wont let me login if i add ()
    yieldSaga(),
    taskReducer,
    selectReducer,
    yieldEdit,
    selectedTaskToEdit,// i wonder if this one would be one we call here- ()???
    yieldDelete(),
    addBellSaga, //will this one require ()?
    deleteBellWatcher(), //is it correct for this one to have ( and run from the root?)
    fetchAllBellsSaga,
  ]);
}
