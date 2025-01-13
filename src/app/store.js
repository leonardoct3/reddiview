import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '/Users/ASUS/reddiview/src/features/posts/postsSlice.js';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});
