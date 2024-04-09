import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  apiDeleteContacts,
  apiGetContacts,
  apiPostContacts,
} from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
// import { selectContacts, selectNameFilter } from "./selectors";

const INITIAL_STATE_CONTACTS = {
  items: [],
  loading: false,
  error: null,
};

// Функція createSlice() генерує Action creator і reducer одночасно
const detailsContactsSlice = createSlice({
  name: "detailsContacts",
  initialState: INITIAL_STATE_CONTACTS,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        // запишемо до кожного статусу функцію редьюсер яка буде опрацьовувати логіку
        state.loading = true; // ввімкнули індикатор завантаження
        state.error = false; // під час кожного нового запиту скидуємо помилку
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false; // Якщо дані завантажились успішнно вимкнули індикатор завантажння
        state.items = action.payload; // встановили необхідні дані (дані беруться після ретурну Thunk)
        // state.items.push(action.payload);
        // state.items = state.items.filter(
        //   (item) => item.id !== action.payload.id
        // );
      })
      .addCase(apiGetContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(apiPostContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiPostContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(apiPostContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(apiDeleteContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) =>
    items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
);

// Редюсер слайсу
export const detailsContactsReducer = detailsContactsSlice.reducer;
