import axios from "axios";
const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
// створимо Функцію setToken для встановлення token в instance (token нам прийде с серверу)
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// функція для очистки tokeny
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};
// 1. Свторюємо сервіс на реєстрацію користувача (нам потрібні дані користувача на реєстрацію для запиту)
export const requestSignUp = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  setToken(data.token); // так як в data нам повернеться token, можна використати функцію setToken

  return data;
};
// 2. Свторюємо сервіс логінізації користувача (нам потрібні дані користувача на логінізацію для запиту)
export const requestSignIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  setToken(data.token); // так як в data нам повернеться token, можна використати функцію setToken

  return data;
};
// 3.
export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");

  return data;
};
// 4. Свторюємо сервіс виходу користувача з акаунта (нам потрібно передати token в header)
export const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout");

  return data;
};
