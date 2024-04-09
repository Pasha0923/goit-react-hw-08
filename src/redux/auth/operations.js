import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetCurrentUser,
  requestSignIn,
  requestSignUp,
} from "../../services/contactsApi";
// Thunkbl будуть використовувати наші сервіси з contactsApi.js
//   REGISTER
export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignUp(formData);
      console.log("data: ", data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//   LOGIN
export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const data = await requestSignIn(formData);
      console.log("data: ", data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
//   REFRESH
export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);
    try {
      const data = await requestGetCurrentUser();
      console.log("data: ", data);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
