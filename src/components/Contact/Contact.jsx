import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(apiDeleteContact(id));
    toast.success("Contact was deleted successfully");
  };

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

      {/* <Button variant="contained" type="button" onClick={handleDelete}>
        Delete
        <AiOutlineUserDelete size={25} />
      </Button> */}
      <Button variant="contained" color="success" onClick={handleDelete}>
        Delete
        <AiOutlineUserDelete size={25} />
      </Button>
    </div>
  );
};

export default Contact;
