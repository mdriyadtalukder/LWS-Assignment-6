import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editRelatedVideo, getRelatedVideos } from "./relatedVideosAPI"

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: "",
}
export const fetchRelatedVideos = createAsyncThunk("relatedVideos/fetchRelatedVideos",
    async ({ tags, id }) => {
        const tag = await getRelatedVideos({ tags, id });
        return tag;
    })
export const updateRelatedVideos = createAsyncThunk("relatedVideos/updateRelatedVideos",
    async ({ id, data }) => {
        const video = await editRelatedVideo(id, data);
        return video;
    })
const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.relatedVideos = [];
                state.error = action.error?.message;
            })
            .addCase(updateRelatedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(updateRelatedVideos.fulfilled, (state, action) => {
                console.log(action)
                state.isLoading = false;
                let getIndex = state.relatedVideos.findIndex(v => v.id === action.payload.id)
                state.relatedVideos[getIndex] = action.payload;
            })
            .addCase(updateRelatedVideos.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
    }
})
export default relatedVideosSlice.reducer; 