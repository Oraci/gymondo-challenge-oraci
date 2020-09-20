import { action } from 'typesafe-actions';
import { WorkoutsTypes, Workout } from './types';

export const loadRequest = () => action(WorkoutsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Workout[]) =>
  action(WorkoutsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(WorkoutsTypes.LOAD_FAILURE);
