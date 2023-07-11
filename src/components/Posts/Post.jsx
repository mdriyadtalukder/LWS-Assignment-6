import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const { createdAt, description, id, image, isSaved, likes, tags, title } = post;
    return (
        <div class="lws-card">

            <Link to={`/posts/${id}`}>
                <img src={image} class="lws-card-image" alt="" />
            </Link>
            <div class="p-4">
                <div class="lws-card-header">
                    <p class="lws-publishedDate">{createdAt}</p>
                    <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`/posts/${id}`} class="lws-postTitle"> {title} </Link>
                <div class="lws-tags">{
                    tags.map((tag) => <span>#{tag}</span>)
                } </div>
                <div class="flex gap-2 mt-4">
                    {isSaved ? <span class="lws-badge">Saved</span> : ""}
                </div>
            </div>
        </div>
    );
};

export default Post;