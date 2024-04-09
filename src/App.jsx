import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsError, selectContactsloading } from "./redux/selectors";
import { apiGetContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { selectFilteredContacts } from "./redux/contactsSlice";
// const contactsData = [
//   { id: "id-1", userName: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", userName: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", userName: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", userName: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectContactsloading);
  const error = useSelector(selectContactsError);
  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        {loading && <Loading />}
        {error && <ErrorMessage />}
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
