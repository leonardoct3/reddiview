import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Reddit } from '../../api/Reddit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId) => {
    const response = await Reddit.getArticleComments(postId);
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = {
          ...state.comments,
          [action.payload.postId]: action.payload.comments,
        }
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
export const selectComments = (state, postId) => state.comments.comments[postId];
