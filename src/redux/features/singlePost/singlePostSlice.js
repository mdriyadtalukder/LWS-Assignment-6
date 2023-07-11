import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSinglePost } from "./singlePostAPI"

const initialState = {
    post: {},
    isLoading: false,
    isError: false,
    error: "",
}
export const fetchSinglePost = createAsyncThunk("singlePost/fetchSinglePost",
    async (postId) => {
        const singlePost = await getSinglePost(postId);
        return singlePost;

    })
const singlePostSlice = createSlice({
    name: "singlePost",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSinglePost.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchSinglePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
            .addCase(fetchSinglePost.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.post = {};
                state.error = action.error?.message;
            })
    }
})
export default singlePostSlice.reducer;