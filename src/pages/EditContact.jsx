import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "../Components/ContactForm";
const CONTACTS_API = "http://localhost:3000/Contacts";

export const EditContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const nameRef = useRef("");
  const numberRef = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${CONTACTS_API}/${id}`);
        setName(response.data.name);
        setNumber(response.data.number);
      } catch (error) {
        console.log(`Error is: ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    nameRef.current.focus();
  };

  const handleNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
    numberRef.current.focus();
  };

  const handleSubmit = () => {
    axios.put(`${CONTACTS_API}/${id}`, { name: name, number: number });
    navigate("/");
  };

  return (
    <div>
      <ContactForm
        myName={name}
        myNumber={number}
        onChangeName={handleName}
        onChangeNumber={handleNumber}
        title="Save"
        onSubmit={handleSubmit}
        inputNameRef={nameRef}
        inputNumberRef={numberRef}
        header="Edit Contact"
      />
    </div>
  );
};
