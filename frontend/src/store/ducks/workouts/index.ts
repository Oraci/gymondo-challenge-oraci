import { Reducer } from 'redux';
import { WorkoutsState, WorkoutsTypes } from './types';

const INITIAL_STATE: WorkoutsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<WorkoutsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorkoutsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case WorkoutsTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case WorkoutsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
