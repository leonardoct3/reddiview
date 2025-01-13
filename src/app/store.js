import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '/Users/ASUS/reddiview/src/features/posts/postsSlice.js';
import subredditsReducer from '/Users/ASUS/reddiview/src/features/subreddits/subredditsSlice.js';
import commentsReducer from '/Users/ASUS/reddiview/src/features/comments/commentsSlice.js';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});
