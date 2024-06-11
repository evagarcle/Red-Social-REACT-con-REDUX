import postsService from "./postsService";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
    posts: [],
    isLoading: false,
    post: {},
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

export const getPostByTitle = createAsyncThunk("posts/getPostByTitle", async (title) => {
    try {
      return await postsService.getPostByTitle(title);
    } catch (error) {
        console.error(error);
    }
});

export const like = createAsyncThunk("posts/like", async (_id) => {
    try {
        return await postsService.like(_id);
    } catch (error) {
        console.error(error);
    }
});

export const notlike = createAsyncThunk("posts/notlike", async (_id) => {
    try {
        return await postsService.notlike(_id);
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

export const deletePostById = createAsyncThunk("posts/delete", async (_id) => {
    try {
        return await postsService.deletePostById(_id)
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
        builder.addCase(getById.fulfilled, (state, action) => {
            state.post = action.payload;
        });
        builder.addCase(like.fulfilled, (state, action) => {
            state.posts = state.posts.map(post =>
                post._id === action.payload.post._id ? action.payload.post : post
            );
            console.log(state.posts);
        })
        // falta pending
        builder.addCase(like.rejected, (state, action) => {
            state.error = action.error.message;
        })
        builder.addCase(notlike.fulfilled, (state, action) => {
            state.posts = state.posts.map(post =>
                post._id === action.payload.post._id ? action.payload.post : post
            );
            console.log(state.posts);
        })
        // falta pending
        builder.addCase(notlike.rejected, (state, action) => {
            state.error = action.error.message;
        });

        builder.addCase(create.fulfilled, (state, action) => {
            state.posts.push(action.payload)
            state.post = action.payload
        });
        builder.addCase(getPostByTitle.fulfilled, (state,action) => {
            state.posts = action.payload
        });
        builder.addCase(deletePostById.fulfilled, (state, action) => {
            state.posts = state.posts.filter(
                (post) => post._id !== action.payload,
            );
        });
        builder.addCase(deletePostById.rejected, (state, action) => {
            state.error = action.payload;
        })
       
    },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;