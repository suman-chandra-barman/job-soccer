import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SavedJobsState {
  savedJobIds: string[];
}

const initialState: SavedJobsState = {
  savedJobIds: [],
};

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState,
  reducers: {
    setSavedJobIds: (state, action: PayloadAction<string[]>) => {
      state.savedJobIds = action.payload;
    },
    addSavedJobId: (state, action: PayloadAction<string>) => {
      if (!state.savedJobIds.includes(action.payload)) {
        state.savedJobIds.push(action.payload);
      }
    },
    removeSavedJobId: (state, action: PayloadAction<string>) => {
      state.savedJobIds = state.savedJobIds.filter(
        (id) => id !== action.payload
      );
    },
    clearSavedJobs: (state) => {
      state.savedJobIds = [];
    },
  },
});

export const {
  setSavedJobIds,
  addSavedJobId,
  removeSavedJobId,
  clearSavedJobs,
} = savedJobsSlice.actions;

export default savedJobsSlice.reducer;
