import { all, takeLatest, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

import { loadRequest, loadSuccess, loadFailure } from './actions';
import { WorkoutsTypes } from './types';

export function* load({ payload }: ActionType<typeof loadRequest>) {
  try {
    const { page, startDate } = payload;

    const params = {
      startDate,
    };

    const response = yield api.get(`workouts/pagination/${page}`, { params });

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([takeLatest(WorkoutsTypes.LOAD_REQUEST, load)]);
