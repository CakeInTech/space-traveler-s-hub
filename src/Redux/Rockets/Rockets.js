import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/API';

// Actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';

// Thunks
export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  try {
    return await API.fetchRockets();
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  rockets: [],
  status: null,
  error: null,
  message: null,
};

// Reducer
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rockets: [
        ...state.rockets.map((rocket) => (
          (rocket.rocketId !== action.payload) ? rocket : {
            ...rocket,
            reserve: !rocket.reserve,
          }
        )),
      ],
    }),
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      status: 'success',
    }),
    [fetchRockets.rejected]: (state, action) => ({
      ...state,
      status: 'rejected',
      error: action.error.message,
    }),
  },
});

export const { reserveRocket } = rocketSlice.actions;
export const allRockets = (state) => state.rockets.rockets;

export default rocketSlice.reducer;
