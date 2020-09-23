import { Reducer } from 'redux';
import { WorkoutsState, WorkoutsTypes } from './types';

const INITIAL_STATE: WorkoutsState = {
  selectedWorkout: {
    id: 0,
    name: '',
    description: '',
    startDate: new Date(),
    categoriesNames: '',
  },
  filterDate: new Date(),
  filterCategories: [],
  workouts: [],
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
        workouts: action.payload.data.rows,
        currentPage: parseInt(action.payload.data.currentPage, 10),
        totalItems: parseInt(action.payload.data.totalItems, 10),
        totalPages: parseInt(action.payload.data.totalPages, 10),
      };
    case WorkoutsTypes.SELECTED_WORKOUT: {
      return { ...state, selectedWorkout: action.payload.data };
    }
    case WorkoutsTypes.SELECTED_FILTER_DATE: {
      return { ...state, filterDate: action.payload.date, currentPage: 1 };
    }
    case WorkoutsTypes.SELECTED_FILTER_CATEGORY: {
      return {
        ...state,
        filterCategories: action.payload.categories,
        currentPage: 1,
      };
    }
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
