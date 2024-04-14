import { Helmet } from "react-helmet-async";
import css from "./Contacts.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import {
  apiAddContact,
  apiGetContacts,
} from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsloading } from "../../redux/contacts/selectors";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsloading);
  const isError = useSelector(selectContactsloading);
  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  // Функція на додавання контактів
  const onAddContact = (contactData) => {
    dispatch(apiAddContact(contactData));
  };

  return (
    <div className={css.container}>
      {isLoading && <Loading />}
      {isError && <ErrorMessage />}
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.infoCont}>
        <div className={css.functionalCont}>
          <ContactForm onAddContact={onAddContact} />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
