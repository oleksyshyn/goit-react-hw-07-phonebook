import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

function ContactsList() {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();
    
    const deleteContactHandler = (id) => {
        dispatch(deleteContact(id));
    }
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={css.contacts_list_item} key={id}>
                    <p className={css.contact}>{name}: {number}</p>
                    <button className={css.button} onClick={() => deleteContactHandler(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        }),
    ),
};