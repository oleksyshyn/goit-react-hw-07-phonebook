import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state, action) {
           state.contacts = state.contacts.filter(
             contact => contact.id !== action.payload
           );
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const addContact = contactsSlice.actions.addContact;
export const deleteContact = contactsSlice.actions.deleteContact;
export const setFilter = contactsSlice.actions.setFilter;

export const contactsReducer = contactsSlice.reducer;