import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPost = ({ post }) => {
    const { createdAt, description, id, image, isSaved, likes, tags, title } = post;
    return (
        <div class="card">
            <Link to={`/posts/${id}`}>
                <img src={image} class="card-image" alt="" />
            </Link>
            <div class="p-4">
                <Link to={`/posts/${id}`} class="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div class="mb-0 tags">
                    {
                        tags.map((tag) => <span>#{tag}</span>)
                    }
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    );
};

export default RelatedPost;