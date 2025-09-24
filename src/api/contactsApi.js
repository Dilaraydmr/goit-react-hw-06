// src/services/contacts.js

export const fetchInitialContacts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'John Smith', number: '+1 202 555 0143' },
        { id: '2', name: 'Emily Johnson', number: '+44 20 7946 0958' },
        { id: '3', name: 'Carlos Martinez', number: '+34 612 345 678' },
        { id: '4', name: 'Sophie Müller', number: '+49 151 23456789' },
        { id: '5', name: 'Luca Rossi', number: '+39 347 123 4567' },
      ]);
    }, 1000);
  });
};
// src/api/contactsApi.js