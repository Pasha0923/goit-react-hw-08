import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://660ef702356b87a55c509176.mockapi.io";
export const apiGetContacts = createAsyncThunk(
  "contacts/fetchAll", // 1-й аргумент сутність (префікс)
  async (_, thunkAPI) => {
    // Ця асинхронна колбек функцція наз. PayloadCreator
    //2-й арумент асинхронна колбек-функція (приймає в себе аргументи які санці потрібні)
    // Наприклад contactId - потрібен санці щоб отримати дані про конкретний продукт
    //  thunkAPI - це об'єкт керування санкою
    try {
      const { data } = await axios.get("/contacts");
      console.log("data: ", data);
      return data; // Це значення буде записане в action.payload під капотом
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message); // Це значення буде записане в action.payload
    }
  }
);
export const apiPostContacts = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", newContact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const apiDeleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
