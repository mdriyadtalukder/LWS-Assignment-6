import React, { useEffect } from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/features/posts/postsSlice';
const Posts = () => {
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
    const filtering = useSelector((state) => state.filters);
    console.log(filtering.statuss)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    let content;
    if (isLoading) {
        content = <h1>Loading...</h1>
    }
    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }
    if (!isError && !isLoading && posts?.length === 0) {
        content = <h1>No Post Find...</h1>
    }
    if (!isError && !isLoading && posts?.length > 0) {
        content = posts
            .filter((post) => {
                if (filtering.statuss === "Saved") {
                    return post.isSaved;
                }
                else {
                    return true;
                }
            })
            .sort((a, b) => {
                if (filtering.sorts === "most_liked") {
                    return b.likes - a.likes; //sort hbe boro theke choto te
                    // return a.likes - b.likes; sort hbe choto theke boro te
                }
                else if (filtering.sorts === "newest") {
                    return new Date(b.createdAt) - new Date(a.createdAt);

                }
                else {
                    return true;
                }
            })
            .map((post) => <Post post={post} key={post.id}></Post>)
    }
    return (
        <main class="post-container" id="lws-postContainer">
            {content}
        </main>
    );
};

export default Posts;