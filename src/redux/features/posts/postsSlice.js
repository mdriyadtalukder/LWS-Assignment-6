import { getPosts } from "./postAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts",
    async () => {
        const post = await getPosts();
        return post;
    })
const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.posts = [];
                state.error = action.error?.message;
            })
    }
})
export default postsSlice.reducer;