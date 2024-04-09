import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { apiDeleteContacts } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteContacts(id));
  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>
          <span className={css.contactIcon}>
            <IoPerson />
          </span>
          {name}
        </p>
        <p className={css.contactText}>
          <span className={css.contactIcon}>
            <FaPhone />
          </span>
          {number}
        </p>
      </div>

      <button type="button" className={css.deleteBtn} onClick={handleDelete}>
        Delete
        <AiOutlineUserDelete size={25} />
      </button>
    </div>
  );
};

export default Contact;
