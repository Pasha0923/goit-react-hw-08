import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
  setToken,
} from "../../services/userApi";
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
    //  !!!перед тим як робити запит треба дістати значення токену зі state
    //   і встановити це значення токену в header
    const state = thunkAPI.getState(); // метод getState() поверне state всього додатку
    const token = state.auth.token; // отримаємо token зі state
    setToken(token); // встановлюємо token в функцію setToken
    // Після цих дій в header instance запишеться token в функцію setToken
    try {
      const data = await requestGetCurrentUser(); // викликаємо іі в APP
      // console.log("data: ", data);
      // сервер у відповідь повертає за токеном об'єкт який прив'язаний до акаунта
      //  (з полями name і email користувача)
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//   LOGOUT
export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const data = await requestLogOut();
      console.log("data: ", data);

      return;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
