import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments } from './CommentsSlice';
import { Comment } from './Comment';
import { SkeletonComment } from './SkeletonComment';

export const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => selectComments(state, postId));

    useEffect(() => {
        // Dispatch the action to fetch comments for the given postId
        dispatch(fetchComments(postId));
    }, [dispatch, postId]);

    if (!comments) {
        // Render skeleton loader while comments are loading
        return (
            <div>
                <SkeletonComment />
                <SkeletonComment />
                <SkeletonComment />
            </div>
        );
    }

    if (!Array.isArray(comments)) {
        console.error('Expected comments to be an array:', comments);
        return <p>No comments available.</p>;
    }

    return (
        <div>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};
