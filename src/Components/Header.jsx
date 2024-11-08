import { useNavigate } from "react-router-dom";
const cls =
  "text-white font-bold rounded-xl bg-green-400 pt-2 pb-2 pl-3 pr-3 mr-2";
export const Header = () => {
  const navigate = useNavigate();

  const addContact = () => {
    navigate("./new-contact");
  };
  const home = () => {
    navigate("./");
  };
  return (
    <div>
      <button onClick={addContact} className={cls}>
        Add
      </button>
      <button onClick={home} className={cls}>
        Home
      </button>
    </div>
  );
};
