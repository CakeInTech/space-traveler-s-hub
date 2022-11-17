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
  reducers: {
    getMission: (state, action) => ({
      ...state,
      missions: [
        ...state.missions.map((mission) => (mission.missionId === action.payload
          ? { ...mission, joined: !mission.joined }
          : mission)),
      ],
    }),
  },
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

export const { getMission } = missionSlice.actions;

export default missionSlice.reducer;
