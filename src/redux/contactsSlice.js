import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchInitialContacts } from '../api/contactsApi';

export const loadContacts = createAsyncThunk(
  'contacts/loadContacts',
  async () => {
    const response = await fetchInitialContacts();
    return response;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export default contactsSlice.reducer;