import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentsService from './commentsService';

const initialState = {
    comments: [],
    isLoading: false,
    error: null
};

export const addComment = createAsyncThunk("comments/addComment", async ({ _id, comment }) => {
    try {
        return await commentsService.addComment(_id, comment);
    } catch (error) {
        console.error(error);
    }
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addComment.fulfilled, (state, action) => {
            const { _id, comment } = action.payload;
            state.comments = state.comments.map(post =>
                post._id === _id ? { ...post, comments: [...post.comments, comment] } : post
            );
        });
        builder.addCase(addComment.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addComment.rejected, (state, action) => {
            state.error = action.error.message;
        });
    },
});

export default commentsSlice.reducer;

