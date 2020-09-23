import { all } from 'redux-saga/effects';

import workouts from './workouts/sagas';
import categories from './categories/sagas';

export default function* rootSaga() {
  return yield all([workouts, categories]);
}
