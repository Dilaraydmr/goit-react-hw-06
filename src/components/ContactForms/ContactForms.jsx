import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

const ContactsForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // Basit kontrol: isim boş geçilemez
        if (!name.trim() || !number.trim()) return;

        // Eğer aynı isimde bir iletişim zaten varsa uyarı verebilirsiniz
        const isDuplicate = contacts.some(contact => contact.name === name);
        if (isDuplicate) {
            alert(`${name} zaten listede var!`);
            return;
        }

        dispatch(addContact({ id: nanoid(), name, number }));
        setName('');
        setNumber('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={styles.input}
                />
            </label>
            <label className={styles.label}>
                Phone:
                <input
                    type="tel"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    className={styles.input}
                />
            </label>
            <button type="submit" className={styles.button}>Add</button>
        </form>
    );
};

export default ContactsForm;