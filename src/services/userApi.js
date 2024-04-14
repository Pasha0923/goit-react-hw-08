import axios from "axios";
const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
// Якщо у нас в проекті не один сервіс а їх багато, то axios.defaults.baseURL
// не використовувати, тому що його не можна перевизначити а використовувати
// instance для іншого сервісу наприклад

// const blogInstance = axios.create({
//   baseURL: "https://тут у нас буде запит на інший бекенд",
// });
// В СЕРВІСАХ тоді використовуємо blogInstance.post або.get.delete

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
// 3. Сервіс автологінізації після оновлення сторінки
export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");

  return data;
};
// 4. Свторюємо сервіс виходу користувача з акаунта (нам потрібно передати token в header)
export const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout");

  return data;
};

// СЕРВІСИ ДЛЯ КОНТАКТІВ!
// 1. Сервіс на отримання контактів
export const requestGetContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};
// 2. Сервіс на додавання контактів (formData будуть приходити дані с форми)
export const requestAddContact = async (formData) => {
  const { data } = await instance.post("/contacts", formData);

  return data;
};
// 3. Сервіс на видалення контакту
export const requestDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
// Після проектування сервісів до них можна звертатися всередині санки
