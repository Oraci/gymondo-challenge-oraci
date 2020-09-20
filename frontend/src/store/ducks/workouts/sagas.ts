import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { WorkoutsTypes } from './types';

export function* load() {
  try {
    const response = yield call(api.get, 'workouts');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(WorkoutsTypes.LOAD_REQUEST, load)]);
