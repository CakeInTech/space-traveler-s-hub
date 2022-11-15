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
  missions: [],
  status: null,
  error: null,
  message: null,
};

// Reducer
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      status: 'success',
    }),
    [fetchRockets.rejected]: (state, action) => ({
      ...state,
      status: 'rejected',
      error: action.error.message,
    }),
  },
});

export default rocketSlice.reducer;
