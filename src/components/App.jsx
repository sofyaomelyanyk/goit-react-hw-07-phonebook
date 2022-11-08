import { nanoid } from 'nanoid';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from 'redux/operations/contacts-operations';
import { setFilter } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { useEffect } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Loader } from './Loader/Loader';



export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterContacts = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactAdd = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (contacts.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContacts(data));
  };

  const contactDelete = id => {
    dispatch(deleteContacts(id));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const normalizeFilter = filterContacts.toLowerCase();
  const filterContactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={contactAdd} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filterContacts} changeFilter={changeFilter} />
        <ContactsList
          contacts={filterContactsList}
          deleteContact={contactDelete}
        />
      </Section>
    </>
  );
};
