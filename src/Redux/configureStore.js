import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import missionSlice from './missions/missions';
import rocketSlice from './Rockets/Rockets';

const rootReducer = combineReducers({
  missions: missionSlice,
  rockets: rocketSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  },

);

export default store;
