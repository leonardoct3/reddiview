import React from "react";
import "./Post.css";
import { RedditLogo, ArrowUp, ArrowDown, ChatCenteredDots } from "@phosphor-icons/react";

export const Post = ({ post }) => {
  return (
    <div className="reddit-post">
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-info">
          <span className="subreddit">{post.subreddit_name_prefixed}</span>
          <span className="author"> by {post.author}</span>
        </div>
      </div>

      {post.is_video && post.media && post.media.reddit_video && (
        <div className="post-video">
          <video controls width="100%">
            <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {post.selftext && <p className="post-text">{post.selftext}</p>}

      {post.thumbnail && post.thumbnail !== "self" && !post.is_video && post.thumbnail !== "default" && (
        <div className="post-thumbnail">
          <img src={post.thumbnail} alt="Post Thumbnail" />
        </div>
      )}

      <div className="post-footer">
        <div className="upvotes-container">
            <ArrowUp className="arrow up" size={16} />
            <span className="upvotes">{post.ups}</span>
            <ArrowDown className="arrow down" size={16} />
        </div>
        <div className="comments-button-container">
          <ChatCenteredDots className="comments-icon" size={20} />
          <span className="comments-button">{post.num_comments}</span>
        </div>
        <a
          href={`https://www.reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="post-link"
        >
          <RedditLogo size={20} />
        </a>
      </div>
      {/* {showComments && post.num_comments > 0 ? (
        <div className="comments">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <button className="comments-button" onClick={handleShowComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      )} */}
    </div>
  );
};
