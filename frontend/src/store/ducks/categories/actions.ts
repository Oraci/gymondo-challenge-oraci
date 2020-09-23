import { action } from 'typesafe-actions';
import { CategoriesTypes } from './types';

export const loadCategoriesRequest = () => action(CategoriesTypes.LOAD_REQUEST);

export const loadCategoriesSuccess = (data: {}) =>
  action(CategoriesTypes.LOAD_SUCCCES, { data });

export const loadCategoriesFailure = () => action(CategoriesTypes.LOAD_FAILURE);
