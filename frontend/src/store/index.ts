import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { WorkoutsState } from './ducks/workouts/types';
import { CategoriesState } from './ducks/categories/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  workouts: WorkoutsState;
  categories: CategoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(enhancer)
);

sagaMiddleware.run(rootSaga);

export default store;
