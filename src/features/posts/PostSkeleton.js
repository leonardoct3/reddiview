import React from "react";
import "./Post.css";

export const PostSkeleton = () => {
  return (
    <div className="reddit-post skeleton">
      <div className="post-header">
        <div className="skeleton-title"></div>
        <div className="post-info">
          <div className="skeleton-sr-name"></div>
          <div className="skeleton-author"></div>
        </div>
      </div>

      <div className="post-thumbnail">
        <div className="skeleton-thumbnail"></div>
      </div>

      <div className="post-text">
        <div className="skeleton-text-line"></div>
        <div className="skeleton-text-line"></div>
        <div className="skeleton-text-line short"></div>
      </div>

      <div className="post-footer">
        <div className="skeleton-footer-item"></div>
        <div className="skeleton-footer-item"></div>
        <div className="skeleton-footer-item"></div>
      </div>
    </div>
  );
};
