import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api/API';

// Actions
const FETCH_MISSIONS = 'FETCH_MISSIONS';

// Thunks
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  try {
    return await API.fetchMissions();
  } catch (error) {
    return error.message;
  }
});

export const allMissions = (state) => state.missions.missions;

const initialState = {
  missions: [],
  status: null,
  error: null,
  message: null,
};

// Reducer
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchMissions.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      status: 'success',
    }),
    [fetchMissions.rejected]: (state, action) => ({
      ...state,
      status: 'rejected',
      error: action.error.message,
    }),
  },
});

export default missionSlice;
