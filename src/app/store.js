import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice.js';
import subredditsReducer from '../features/subreddits/subredditsSlice.js';
import commentsReducer from '../features/comments/commentsSlice.js';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});
