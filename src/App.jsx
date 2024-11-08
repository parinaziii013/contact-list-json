import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditContact, Home, NewContact } from "./pages";
import { ContactDetails } from "./Components/ContactDetails";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="p-4">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/contact-details/:id" element={<ContactDetails />} />
          <Route path="/editContact/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
