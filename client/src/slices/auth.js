import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

export const authUser = createAsyncThunk(
  "user/authUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = axios.post(
        user.username ? "/auth/register" : "/auth/login",
        user
      );
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [authUser.pending]: (state) => {
      state.isLoading = true;
    },
    [authUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    },
    [authUser.rejected]: (state) => {
      state.isLoading = true;
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer