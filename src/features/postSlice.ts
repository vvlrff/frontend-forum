import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface PostState {
  title: string | null;
  text: string | null;
};

const initialState: PostState = {
  title: null,
  text: null
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (
      state,
      action: PayloadAction<{ title: string, text: string }>
    ) => {
      state.title = action.payload.title;
      state.text = action.payload.text;
    }
  }
});

export const selectPost = (state: RootState) => state.post;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;