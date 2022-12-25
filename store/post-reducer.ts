import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostEntity } from "../respositories/post-repository";

interface PostState {
  posts: PostEntity[];
}

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePost: (state, action: PayloadAction<PostEntity[]>) => {
      state.posts = action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export type postActions = typeof postSlice.actions;
export default postSlice.reducer;
