import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { weatherReducer } from './reducers/weatherReducer';

export const store = createStore(weatherReducer,  composeWithDevTools(applyMiddleware(thunkMiddleware)));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch