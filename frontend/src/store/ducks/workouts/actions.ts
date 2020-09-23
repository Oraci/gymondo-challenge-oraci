import { action } from 'typesafe-actions';
import { WorkoutsTypes, Workout } from './types';

export const loadWorkoutsRequest = ({
  page,
  startDate,
  categories,
}: {
  page: number;
  startDate: Date | Date[];
  categories: number[];
}) => action(WorkoutsTypes.LOAD_REQUEST, { page, startDate, categories });

export const loadWorkoutsSuccess = (data: {}) =>
  action(WorkoutsTypes.LOAD_SUCCCES, { data });

export const loadWorkoutsFailure = () => action(WorkoutsTypes.LOAD_FAILURE);

export const selectedWorkout = (data: Workout) =>
  action(WorkoutsTypes.SELECTED_WORKOUT, { data });

export const selectedFilterDate = (date: Date | Date[]) =>
  action(WorkoutsTypes.SELECTED_FILTER_DATE, { date });

export const selectedFilterCategories = (categories: number[]) =>
  action(WorkoutsTypes.SELECTED_FILTER_CATEGORY, { categories });
