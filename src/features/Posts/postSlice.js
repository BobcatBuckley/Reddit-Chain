import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: {},
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPosts: (state, action) => {
			state.posts = action.payload;
		},
	},
});

export const { addPosts } = postSlice.actions;
export default postSlice.reducer;
export const getAllPosts = (state) => state.posts.posts;
