import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null
}

export const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{}
})

export const register = createAsyncThunk("auth/register", async(user)=>{
  console.log(user)
})

export default authSlice.reducer