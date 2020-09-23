import { combineReducers } from 'redux';

import workouts from './workouts';
import categories from './categories';

export default combineReducers({
  workouts,
  categories,
});
