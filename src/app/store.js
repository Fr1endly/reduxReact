import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import counterReducer from '../features/counter/counterSlice';
import reducers from '../reducers';


export const store = createStore(reducers, {})
