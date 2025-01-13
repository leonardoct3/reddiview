import React from "react";
import "./Post.css";
import {
  RedditLogo,
  ArrowUp,
  ArrowDown,
  ChatCenteredDots,
} from "@phosphor-icons/react";
import { Comments } from "../comments/Comments";
import { useDispatch } from "react-redux";
import { fetchComments } from "../comments/CommentsSlice";
import { vote } from "./PostsSlice";
import { fetchPosts } from "./PostsSlice";

export const Post = ({ post }) => {
  const [showComments, setShowComments] = React.useState(false);
  const [activeArrow, setActiveArrow] = React.useState(0);
  const dispatch = useDispatch();

  const toggleShowComments = () => {
    setShowComments((prev) => !prev);

    // Fetch comments only when toggling to show
    if (!showComments) {
      dispatch(fetchComments(post.id));
    }
  };

  const handleVote = (dir) => {
    if (dir === activeArrow) {
      dir = 0;
      setActiveArrow(0);
    } else {
      setActiveArrow(dir);
    }
    dispatch(vote(post.id, dir));
    dispatch(fetchPosts());
  };

  return (
    <div className="reddit-post">
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-info">
          <span className="sr-name">{post.subreddit_name_prefixed}</span>
          <span className="author">by {post.author}</span>
        </div>
      </div>

      {post.is_video && post.media?.reddit_video && (
        <div className="post-video">
          <video controls width="100%">
            <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {post.selftext && <p className="post-text">{post.selftext}</p>}

      {post.thumbnail &&
        post.thumbnail !== "self" &&
        !post.is_video &&
        post.thumbnail !== "default" &&
        post.thumbnail !== "image" && (
          <div className="post-thumbnail">
            <img src={post.thumbnail} alt="Post Thumbnail" />
          </div>
        )}

      <div className="post-footer">
        <div className="upvotes-container">
          <ArrowUp onClick={() => handleVote(1)} className={`arrow up ${activeArrow === 1 ? 'active' : ''}`} size={16} />
          <span className="upvotes">{post.ups}</span>
          <ArrowDown onClick={() => handleVote(-1)} className={`arrow down ${activeArrow === -1 ? 'active' : ''}`} size={16} />
        </div>
        <div
          className="comments-button-container"
          onClick={toggleShowComments}
        >
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
      {showComments && <Comments postId={post.id} />}
    </div>
  );
};
