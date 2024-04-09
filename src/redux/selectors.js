// ФУНКЦІЇ СЕЛЕКТОРІВ СЛАЙСУ
// Підписуємось на дані через UseSelector
export const selectNameFilter = (state) => state.detailsFilters.name;
// Підписуємось на дані через UseSelector
export const selectContacts = (state) => state.detailsContacts.items;
export const selectContactsError = (state) => state.detailsContacts.error;
export const selectContactsloading = (state) => state.detailsContacts.loading;
