import { action } from 'typesafe-actions';
import { WorkoutsTypes } from './types';

export const loadRequest = ({
  page,
  startDate,
}: {
  page: number;
  startDate: Date | Date[];
}) => action(WorkoutsTypes.LOAD_REQUEST, { page, startDate });

export const loadSuccess = (data: {}) =>
  action(WorkoutsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(WorkoutsTypes.LOAD_FAILURE);
