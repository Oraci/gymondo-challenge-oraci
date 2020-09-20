import { all } from 'redux-saga/effects';

import workouts from './workouts/sagas';

export default function* rootSaga() {
  return yield all([workouts]);
}
