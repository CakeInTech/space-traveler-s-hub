import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionSlice from './missions/missions';

const rootReducer = combineReducers({
  missionSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;
