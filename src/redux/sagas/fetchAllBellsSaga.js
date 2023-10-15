import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllBells() {
    try {
        const response = yield axios.get('/api/bells');
        //OR??
        // const response = yield call(() => axios.get('/api/bells'));

        yield put({ type: 'SET_ALL_BELLS', payload: response.data });
    } catch (error) {
        console.error('Error fetching all bells:', error);
    }
}

function* fetchAllBellsSaga() {
    yield takeLatest('FETCH_ALL_BELLS', fetchAllBells);
}

export default fetchAllBellsSaga;
