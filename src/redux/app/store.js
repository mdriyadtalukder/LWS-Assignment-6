import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import singlePostSlice from "../features/singlePost/singlePostSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import filterSlice from "../filter/filterSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        singlePost: singlePostSlice,
        relatedVideos: relatedVideosSlice,
        filters:filterSlice,
    }
})