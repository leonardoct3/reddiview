import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Post } from "./Post";
import { PostSkeleton } from "./PostSkeleton";
import { fetchPosts } from "./postsSlice";
import './Posts.css';

export const Posts = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="posts-list">
            {posts.length === 0
                ? // Show skeletons while loading
                  Array.from({ length: 5 }).map((_, index) => (
                      <PostSkeleton key={index} />
                  ))
                : // Render posts once loaded
                  posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
};
