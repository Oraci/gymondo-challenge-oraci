import { Router } from 'express';

import WorkoutController from './app/controllers/WorkoutController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

routes.post('/workouts', WorkoutController.store);
routes.get('/workouts', WorkoutController.index);
routes.get('/workouts/pagination/:page', WorkoutController.pagination);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

export default routes;
