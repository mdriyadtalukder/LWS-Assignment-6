import React, { useEffect } from 'react';
import RelatedPosts from '../components/relatedPosts/RelatedPosts';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePost } from '../redux/features/singlePost/singlePostSlice';
import { updateRelatedVideos } from '../redux/features/relatedVideos/relatedVideosSlice';

const PostDescription = () => {
    const { postId } = useParams();
    const { createdAt, description, id, image, isSaved, likes, tags, title } = useSelector((state) => state.singlePost.post);
    const dispatch = useDispatch();
    console.log(tags)
    useEffect(() => {
        dispatch(fetchSinglePost(postId))
    }, [dispatch, createdAt, description, id, image, isSaved, likes, tags, title]);
    const updates = () => {
        dispatch(updateRelatedVideos({
            id,
            data: {
                createdAt, description, id, image, isSaved, likes: likes + 1, tags, title
            }
        }))
    }
    const updates2 = () => {
        dispatch(updateRelatedVideos({
            id,
            data: {
                createdAt, description, id, image, isSaved: !isSaved, likes, tags, title
            }
        }))
    }
    return (
        <div>
            <div class="container mt-8">

                <Link to='/' class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    class="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>
            <section class="post-page-container">
                <main class="post">
                    <img src={image} alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
                    <div>
                        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
                            {title}
                        </h1>
                        <div class="tags" id="lws-singleTags">
                            {
                                tags?.map((tag) => <span>#{tag}</span>)
                            }
                        </div>
                        <div class="btn-group">
                            <button class="like-btn" id="lws-singleLinks" onClick={updates}>
                                <i class="fa-regular fa-thumbs-up"></i> {likes}
                            </button>

                            <button onClick={updates2} class={` ${isSaved && 'active'} save-btn`} id="lws-singleSavedBtn">
                                <i class="fa-regular fa-bookmark"></i> Saved
                            </button>
                        </div>
                        <div class="mt-6">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </main>
                <aside>
                    <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
                    <div class="space-y-4 related-post-container">
                        <RelatedPosts tags={tags} id={id}></RelatedPosts>
                    </div>

                </aside>
            </section>
        </div>
    );
};

export default PostDescription;