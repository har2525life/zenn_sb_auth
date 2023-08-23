import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UseFormReset } from "react-hook-form";

function useAuth(reset: UseFormReset<Auth>) {
  const navigate = useNavigate();
  const [isPage, setIsPage] = useState(false);

  const changeAuth = (): void => {
    setIsPage(!isPage);
    reset();
  };

  const submitLogin = async (event: Auth) => {
    const { email, password } = event;
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/about");
    });
  };

  const submitSignup = async (event: Auth) => {
    const { email, password } = event;
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/about");
    });
  };

  return {
    submitLogin,
    submitSignup,
    changeAuth,
    isPage,
  };
}

export default useAuth;
