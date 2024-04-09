import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_FILTERS = {
  name: "",
};
// Функція createSlice() генерує Action creator і reducerы одночасно
const detailsFiltersSlice = createSlice({
  // Ім'я слайсу
  name: "detailsFilters",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE_FILTERS,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// експорт Генераторів Action Creator
export const { setFilter } = detailsFiltersSlice.actions;
// експорт Редюсера слайсу
export const detailsFiltersReducer = detailsFiltersSlice.reducer;
