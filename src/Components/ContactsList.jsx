import axios from "axios";
import { useEffect, useState } from "react";
import { ContactItem } from "./ContactItem";
import { Link } from "react-router-dom";

const CONTACTS_API = "http://localhost:3000/Contacts";

const cls = "flex border-2 border-green-500 rounded-xl p-2 mr-2 mb-4 bg-white";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    //useEffect can't be async, so we make 'getContacts' function inside it.
    const getContacts = async () => {
      try {
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const handleChange = ({ target }) => {
    setSearchName(target.value);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.trim().toLowerCase().includes(searchName.toLowerCase())
  );
  return (
    <div>
      <div className="flex border-2 rounded-xl p-3 mr-2 mb-4 bg-white">
        <input
          type="search"
          onChange={handleChange}
          placeholder="Search Contact..."
          className="w-full"
        />
      </div>
      {filterContacts.length > 0 ? (
        filterContacts.map(({ id, name, number }) => (
          <Link key={id} to={`/contact-details/${id}`}>
            <ContactItem name={name} number={number} className={cls} />
          </Link>
        ))
      ) : (
        <p>No Contact Found...</p>
      )}
    </div>
  );
};
