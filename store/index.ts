import { configureStore } from "@reduxjs/toolkit";
import factReducer from "./fact";

export const store = configureStore({
  reducer: {
    fact: factReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
