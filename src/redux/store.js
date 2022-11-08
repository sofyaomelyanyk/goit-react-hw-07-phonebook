import { configureStore } from '@reduxjs/toolkit';



import { filterSliceReducer } from './filter/filterSlice';
import { contactsSliceReducer } from './contacts/contactsSlice';



export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterSliceReducer,
  },
  
});


