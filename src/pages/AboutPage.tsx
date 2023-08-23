import { signOut } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <header className="bg-blue-300 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Storybook</h1>
      <button
        onClick={logout}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        LOGOUT
      </button>
    </header>
  );
}

export default About;
