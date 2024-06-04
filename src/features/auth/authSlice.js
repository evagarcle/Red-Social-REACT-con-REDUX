import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"


const token = localStorage.getItem("token") || ""
const user = JSON.parse(localStorage.getItem("user")) || null

const initialState = {
  user: user,
  token: token,
  isError: false,
  isSuccess: false,
  message: ""
}

export const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = ""
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload.message
      })
  }
})

export default authSlice.reducer

export const register = createAsyncThunk("auth/register", async(user)=>{
  try {
    return authService.register(user)    
  } catch (error) {
    console.error(error)
  }
})

export const login = createAsyncThunk("auth/login", async(user)=>{
  try {
    return authService.login(user)    
  } catch (error) {
    console.error(error)
  }
})

export const logout = createAsyncThunk("auth/logout", async()=>{
  try {
    return authService.logout()    
  } catch (error) {
    console.error(error)
  }
})