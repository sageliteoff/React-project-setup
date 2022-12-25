import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Fact } from "../respositories/fact-repository";

// Define a type for the slice state
interface FactState {
  fact: Fact;
}

// Define the initial state using that type
const initialState: FactState = {
  fact: {} as Fact,
};

export const factSlice = createSlice({
  name: "fact",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveFact: (state, action: PayloadAction<Fact>) => {
      state.fact = action.payload;
    },
  },
});

export const factActions = factSlice.actions;
export type FactsActions = typeof factSlice.actions;
export default factSlice.reducer;
