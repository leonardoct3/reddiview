import React from "react";

export const Post = (post) => {
    const renderedPost = post.post;
    return (
        <article className="post-excerpt" key={renderedPost.id}>
            <h3>{renderedPost.domain}</h3>
            <p className="post-content">{renderedPost.author}</p>
        </article>
    );
};