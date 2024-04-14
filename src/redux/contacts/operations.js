import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import {
  requestAddContact,
  requestDeleteContact,
  requestGetContacts,
} from "../../services/userApi";

export const apiGetContacts = createAsyncThunk(
  "phonebook/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      console.log("data: ", data);
      return data; // Це значення буде записане в action.payload під капотом
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message); // Це значення буде записане в action.payload
    }
  }
);
export const apiAddContact = createAsyncThunk(
  "phonebook/add",
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      console.log("data: ", data);
      return data; // бекенд повертає новостворений об'єкт контакту з БД
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const apiDeleteContact = createAsyncThunk(
  "phonebook/delete",
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      console.log(" data: ", data);
      return data; // бекенд повертає видалений об'єкт контакту з БД
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
