import postsService from "./postsService";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'




const initialState = {
    posts: [],
    userPosts: [],
    isLoading: false,
    post: {}
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
    try {
        return await postsService.getAll();
    } catch (error) {
        console.error(error);
    }
});

export const getByUserId = createAsyncThunk("posts/getByUserId", async (_id) => {
    try {
      return await postsService.getById(_id);
    } catch (error) {
      console.error(error);
    }
  });

export const create = createAsyncThunk("posts/create", async (newPostData) => {
    try {
        return await postsService.create(newPostData)
    } catch (error) {
        console.error(error)
    }
})


  
export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAll.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getByUserId.fulfilled, (state, action) => {
            state.userPosts = action.payload;
        });
        builder.addCase(create.fulfilled, (state, action) => {
            state.posts.push(action.payload)
            state.post = action.payload
            state.userPosts.push(action.payload)
        });
        
    },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;