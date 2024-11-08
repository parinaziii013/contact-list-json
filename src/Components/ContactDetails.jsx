import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactItem } from "./ContactItem";
const cls = "flex border-2 border-green-500 rounded-xl p-2 mr-2 mb-4 bg-white";

const CONTACTS_API = "http://localhost:3000/Contacts";

export const ContactDetails = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({});
  const { name, number } = contactInfo;

  const { id } = useParams();
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get(`${CONTACTS_API}/${id}`);
        setContactInfo(data);
      } catch (error) {}
    };
    getUserInfo();
  }, []);

  const handleEdit = () => {
    navigate(`/editContact/${id}`);
  };

  const handleDelete = () => {
    try {
      axios.delete(`${CONTACTS_API}/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="pt-2 pb-2">Contact Details</h1>
      <div className={cls}>
        {contactInfo ? (
          <div className="w-full flex justify-between items-center">
            <ContactItem
              name={name}
              number={number}
              className={"flex items-center"}
            />
            <div className="flex p-2">
              <p onClick={handleEdit} className="cursor-pointer">
                &#x270E;
              </p>
              <p onClick={handleDelete} className="cursor-pointer">
                &#x24CD;
              </p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
