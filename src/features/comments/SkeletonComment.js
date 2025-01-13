import React from 'react';
import './Skeleton.css';

export const SkeletonComment = ({ depth = 0 }) => {
    return (
        <div className="comment skeleton" style={{ marginLeft: `${depth * 20}px` }}>
            <div className="comment-header">
                <span className="skeleton-author"></span>
                <span className="skeleton-flair"></span>
                <span className="skeleton-upvotes"></span>
                <span className="skeleton-date"></span>
            </div>
            <div className="skeleton-text"></div>
        </div>
    );
};
