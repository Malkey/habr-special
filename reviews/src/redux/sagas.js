import { call, put, takeEvery } from 'redux-saga/effects';
import { getDataSuccess, getDataFail } from './actions';
import reviews from './data';

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(reviews);
            // reject(new Error('ОШИБКА'));
        }, 1500);
    });
}

function* loadData() {
    try {
        const data = yield call(fetchData);
        yield put(getDataSuccess(data));
    } catch (error) {
        yield put(getDataFail(error.message));
    }
}

function* watchGetData() {
    yield takeEvery('GET_DATA_REQUEST', loadData);
}

function* rootSaga() {
    yield watchGetData();
}

export default rootSaga;