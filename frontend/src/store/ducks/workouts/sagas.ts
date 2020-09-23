import { call, all, takeLatest, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

import {
  loadWorkoutsRequest,
  loadWorkoutsSuccess,
  loadWorkoutsFailure,
} from './actions';
import { WorkoutsTypes } from './types';

export function* load({ payload }: ActionType<typeof loadWorkoutsRequest>) {
  try {
    const { page, startDate, categories } = payload;

    const params = {
      startDate,
      categories,
    };

    const response = yield call(api.get, `workouts/pagination/${page}`, {
      params,
    });

    yield put(loadWorkoutsSuccess(response.data));
  } catch (err) {
    yield put(loadWorkoutsFailure());
  }
}

export default all([takeLatest(WorkoutsTypes.LOAD_REQUEST, load)]);
