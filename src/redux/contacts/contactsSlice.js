import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from 'redux/operations/contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: ({ isLoading }) => {
      isLoading = true;
    },
    [fetchContacts.fulfilled]: ({ contacts, isLoading }, { payload }) => {
      contacts = payload;
      isLoading = false;
    },
    [fetchContacts.rejected]: ({ error, isLoading }, { payload }) => {
      error = payload;
      isLoading = false;
    },
    [addContacts.pending]: ({ isLoading }) => {
      isLoading = true;
    },
    [addContacts.fulfilled]: ({ contacts, isLoading }, { payload }) => {
      contacts = contacts.push(payload);
      isLoading = false;
    },
    [addContacts.rejected]: ({ error, isLoading }, { payload }) => {
      error = payload;
      isLoading = false;
    },
    [deleteContacts.pending]: ({ isLoading }) => {
      isLoading = true;
    },
    [deleteContacts.fulfilled]: ({ contacts, isLoading }, { payload }) => {
      contacts = contacts.filter(({ id }) => id !== payload);
      isLoading = false;
    },
    [deleteContacts.rejected]: ({ error, isLoading }, { payload }) => {
      error = payload;
      isLoading = false;
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
