import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from 'redux/operations/contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      contacts: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.contacts = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [addContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.contacts.contacts.push(payload);
      state.contacts.isLoading = false;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [deleteContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.contacts.contacts = state.contacts.contacts.filter(
        ({ id }) => id !== payload
      );
      state.contacts.isLoading = false;
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
