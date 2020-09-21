import { Reducer } from 'redux';
import { WorkoutsState, WorkoutsTypes } from './types';

const INITIAL_STATE: WorkoutsState = {
  rows: [],
  currentPage: 1,
  totalItems: 0,
  totalPages: 0,
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
        rows: action.payload.data.rows,
        currentPage: parseInt(action.payload.data.currentPage, 10),
        totalItems: parseInt(action.payload.data.totalItems, 10),
        totalPages: parseInt(action.payload.data.totalPages, 10),
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
