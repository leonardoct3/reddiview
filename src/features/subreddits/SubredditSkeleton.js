import React from 'react';
import './Subreddit.css';

export const SubredditSkeleton = () => {
    return (
        <div className="subreddit skeleton">
            <div className="skeleton-icon"></div>
            <div className="skeleton-name"></div>
        </div>
    );
};
