import { configureStore } from "@reduxjs/toolkit";
import { detailsContactsReducer } from "./contactsSlice";
import { detailsFiltersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    detailsContacts: detailsContactsReducer,
    detailsFilters: detailsFiltersReducer,
  },
});

// Глобальний state нашого додатку
