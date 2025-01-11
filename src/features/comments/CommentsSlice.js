import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Reddit } from '../../api/Reddit';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (postId) => {
        const response = await Reddit.getComments(postId);
        return response.data;
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export default commentsSlice.reducer;
export const selectComments = state => state.comments.comments;