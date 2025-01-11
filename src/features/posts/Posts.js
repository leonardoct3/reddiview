import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Post } from "./Post";
import { fetchPosts } from "./postsSlice";
import './Posts.css';

export const Posts = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();
    
    const renderedPosts = posts.map((post) => (
        <Post key={post.id} post={post} />
    ));

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="posts-list">
            {renderedPosts}
        </div>
    );
}