import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/PostsSlice';
import subredditsReducer from '../features/subreddits/SubredditsSlice';
import commentsReducer from '../features/comments/CommentsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});
