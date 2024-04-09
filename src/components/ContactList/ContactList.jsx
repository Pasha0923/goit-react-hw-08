import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {} from "../../redux/selectors";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const FilteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {FilteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
