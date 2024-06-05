import postService from "./postsService";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    posts: [],
    isLoading: false,
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        return await postService.getAll();
    } catch (error) {
        console.error(error);
    }
});

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (buidler) => {
        buidler
        .addCase(getAll.fulilled, (state, action) => {
            state.posts = action.payload;
        })
    },
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (buidler) => {
        buidler.addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        });
        buidler.addCase(getAll.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;