import React, { useEffect } from 'react';
import img from '../../assets/git.webp'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../redux/features/relatedVideos/relatedVideosSlice';
import RelatedPost from './RelatedPost';

const RelatedPosts = ({ tags, id }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.relatedVideos.relatedVideos);
    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id }))
    }, [dispatch, tags, id])
    return (

        <>
            {
posts.map((post)=><RelatedPost post={post} key={post.id}></RelatedPost>)
            }
        </>


    );
};

export default RelatedPosts;