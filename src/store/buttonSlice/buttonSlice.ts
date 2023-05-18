import { createSlice } from "@reduxjs/toolkit";

export interface ButtonState {
  value: boolean;
}

const initialState: ButtonState = {
  value: false,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleState } = buttonSlice.actions;

export default buttonSlice.reducer;
