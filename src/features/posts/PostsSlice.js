import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Reddit } from '../../api/Reddit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await Reddit.getPosts();
    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
    searchTerm: '',
    subreddit: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, setSubreddit } = postsSlice.actions;
export default postsSlice.reducer;
export const selectAllPosts = (state) => {
  const { posts, searchTerm, subreddit } = state.posts;
  let searchedPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  if (subreddit) {
    searchedPosts = searchedPosts.filter((post) => post.subreddit === subreddit);
  } 
  return searchedPosts;
};
