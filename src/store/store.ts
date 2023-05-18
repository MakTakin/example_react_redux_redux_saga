import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";
import createSagaMiddleware from "redux-saga";
import buttonSaga from "./buttonSaga/buttonSaga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
  middleware: [saga],
});

saga.run(buttonSaga);

export type RootState = ReturnType<typeof store.getState>;
