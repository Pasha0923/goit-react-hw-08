export const selectUser = (state) => state.auth.user;
export const selectUserToken = (state) => state.auth.token;
export const selectUserIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserIsError = (state) => state.auth.isError;
