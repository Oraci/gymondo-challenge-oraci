/**
 * Action types
 */
export enum WorkoutsTypes {
  LOAD_REQUEST = '@workouts/LOAD_REQUEST',
  LOAD_SUCCCES = '@workouts/LOAD_SUCCCES',
  LOAD_FAILURE = '@workouts/LOAD_FAILURE',
  SELECTED_WORKOUT = '@workouts/SELECTED_WORKOUT',
  SELECTED_FILTER_DATE = '@workouts/SELECTED_FILTER_DATE',
  SELECTED_FILTER_CATEGORY = '@workouts/SELECTED_FILTER_CATEGORY',
}

/**
 * Data types
 */
export interface Workout {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  categoriesNames: string;
}

/**
 * State type
 */
export interface WorkoutsState {
  readonly selectedWorkout: Workout;
  readonly filterDate: Date;
  readonly filterCategories: number[];
  readonly workouts: Workout[];
  readonly currentPage: number;
  readonly totalItems: number;
  readonly totalPages: number;
  readonly loading: boolean;
  readonly error: boolean;
}
