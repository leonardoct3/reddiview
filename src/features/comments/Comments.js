import React, { useEffect } from 'react';
import { Comment } from './Comment';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments, fetchComments } from './commentsSlice';

export const Comments = (article) => {
    const reduxComments = useSelector(selectComments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(article.id));
    }, [dispatch, article.id]);

    return (
        <div>
            {reduxComments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};