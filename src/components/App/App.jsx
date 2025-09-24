import React, { useEffect } from "react";
import ContactsForm from "../ContactsForm/ContactsForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import Contact from "../Contact/Contact.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, loadContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  // İlk açılışta kontakları yükle
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Communication Book</h1>
      <ContactsForm />
      <SearchBox />
      <h2>Directory</h2>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
}

export default App;
