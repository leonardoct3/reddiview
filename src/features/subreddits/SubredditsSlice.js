import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Reddit } from '../../api/Reddit';

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const response = await Reddit.getSubreddits();
        console.log(response);
        return response;
    }
);

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.loading = false;
                state.subreddits = action.payload;
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default subredditsSlice.reducer;
export const selectSubreddits = (state) => state.subreddits.subreddits;