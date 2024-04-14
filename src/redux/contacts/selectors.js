export const selectContacts = (state) => state.phoneBookContacts.contacts;
export const selectContactsError = (state) => state.phoneBookContacts.isError;
export const selectContactsloading = (state) =>
  state.phoneBookContacts.isloading;
