import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.card}>
            <p>
                {contact.name}: {contact.number}
            </p>
            <button
                onClick={() => dispatch(deleteContact(contact.id))}
                className={styles.deleteButton}
            >
                Delete
            </button>
        </div>
    );
};

export default Contact;