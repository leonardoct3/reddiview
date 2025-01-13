import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Reddit } from '../../api/Reddit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await Reddit.getPosts();
    return response;
  }
);

export const vote = createAsyncThunk(
  'posts/vote',
  async (id, dir) => {
    await Reddit.vote(id, dir);
    return { id, dir };
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
      })
      .addCase(vote.fulfilled, (state, action) => {
        const post = state.posts.find((post) => post.id === action.payload.id);
        post.likes = action.payload.dir;
      })
      .addCase(vote.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(vote.pending, (state) => {
        state.status = 'loading';
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
