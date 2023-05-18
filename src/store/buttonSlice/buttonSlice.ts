import { createSlice } from "@reduxjs/toolkit";

export interface ButtonState {
  value: boolean;
  isLoading: boolean;
}

const initialState: ButtonState = {
  value: false,
  isLoading: false,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    getInitialFakeState: (state) => {
      state.isLoading = true;
    },
    getInitialFakeStateSuccessful: (state, action) => {
      state.value = action.payload.completed;
      state.isLoading = false;
    },
    getInitialFakeStateFailed: (state) => {
      state.isLoading = true;
    },
    toggleButtonState: (state, action) => {
      state.isLoading = true;
    },
    toggleButtonStateSuccessful: (state, action) => {
      state.value = action.payload.completed;
      state.isLoading = false;
    },
    toggleButtonStateFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  toggleButtonState,
  toggleButtonStateFailed,
  toggleButtonStateSuccessful,
  getInitialFakeState,
  getInitialFakeStateFailed,
  getInitialFakeStateSuccessful,
} = buttonSlice.actions;

export default buttonSlice.reducer;
