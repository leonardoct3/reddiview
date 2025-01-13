import React from 'react';
import './Comment.css';

export const Comment = ({ comment }) => {
    const {
        author,
        body: text,
        created_utc: timestamp,
        ups: upvotes,
        author_flair_text: flair,
        depth
    } = comment;

    const date = new Date(timestamp * 1000).toLocaleString();

    return (
        <div className="comment" style={{ marginLeft: `${depth * 20}px` }}>
            <div className="comment-header">
                <span className="comment-author">{author}</span>
                {flair && <span className="comment-flair">{flair}</span>}
                <span className="comment-upvotes">{upvotes} upvotes</span>
                <span className="comment-date">{date}</span>
            </div>
            <div className="comment-text">{text}</div>
        </div>
    );
};