import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import appReducer from './App/App.reducer';
import { AppTypes } from './App/App.types';

const rootReducer = combineReducers({
  app: appReducer,
});

export interface StateTypes {
  app: AppTypes;
}

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
