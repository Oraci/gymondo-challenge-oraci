import { Router } from 'express';

import WorkoutController from './app/controllers/WorkoutController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

routes.get('/workouts', WorkoutController.index);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

export default routes;
