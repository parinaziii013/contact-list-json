import { ContactForm } from "../Components/ContactForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const CONTACTS_API = "http://localhost:3000/Contacts";

export const NewContact = () => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const handleChange = ({ target }) => {
    setContact({ ...contact, [target.name]: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("Enter Valid Text");
      return;
    }
    try {
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", number: "" });
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  return (
    <div>
      <ContactForm
        myName={name}
        myNumber={number}
        onChange={handleChange}
        onSubmit={handleSubmit}
        title="Add"
        header="New Contact"
      />
    </div>
  );
};
