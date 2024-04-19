import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts } from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
import { apiLogoutUser } from "../auth/operations";

const INITIAL_STATE_CONTACTS = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const phoneBookSlice = createSlice({
  name: "phonebook",
  initialState: INITIAL_STATE_CONTACTS,
  extraReducers: (builder) =>
    builder
      // 1. Опрацювання 3-х станів санки (apiGetContacts) на отримання контактів
      .addCase(apiGetContacts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false; // Якщо дані завантажились успішнно вимкнули індикатор завантажння
        state.contacts = action.payload; // встановили необхідні дані (дані беруться після ретурну Thunk)
        // state.contacts.push(action.payload);
        // state.contacts = state.contacts.filter(
        //   (contact) => contact.id !== action.payload.id
        // );
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // 2. Опрацювання 3-х станів санки (apiAddContact) на додавання контактів
      .addCase(apiAddContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload); // новий об'єкт з контактами додаємо в масив
      })
      .addCase(apiAddContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // 3. Опрацювання 3-х станів санки (apiDeleteContact) на видалення контакту по id
      .addCase(apiDeleteContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // 4. Опрацювання 3-х станів санки (apiLogoutUser) для очищення стану контактів
      //при виході користувача із системи
      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      // під час успішного logout повернули початковий стан об'єкту
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE_CONTACTS;
      })
      .addCase(apiLogoutUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) =>
    contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(name.toLowerCase()) ||
        item.number.toLowerCase().includes(name.trim().toLowerCase())
    )
);

// Редюсер слайсу
export const phoneBookSliceReducer = phoneBookSlice.reducer;
