import { createSlice } from "@reduxjs/toolkit";
import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from "./operations";
// Те що поверне Thunka будемо використовувати в extraReducers
const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      //   REGISTER
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user; // в payload приходить об'єкт у якого 2 поля "user" і "token"
        state.token = action.payload.token; // тут мі зберігаємо token в state щоб його не загубили після оновлення сторінки
        state.isLoggedIn = true; // користувач вже авторизований (true)
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      //   LOGIN
      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiLoginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      //    LOGOUT
      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      // під час успішного logout повернути початковий стан об'єкту
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogoutUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      //   REFRESH
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      }),
});

export const authReducer = authSlice.reducer;
