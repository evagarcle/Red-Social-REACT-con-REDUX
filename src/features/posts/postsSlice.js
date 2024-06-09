import postsService from "./postsService";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'



const initialState = {
    posts: [],
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

export const getById = createAsyncThunk("posts/getById", async (_id) => {
    try {
      return await postsService.getById(_id);
    } catch (error) {
      console.error(error);
    }
  });
  
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
        builder.addCase(getById.fulfilled, (state, action) => {
            state.post = action.payload;
          });
      
    },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;