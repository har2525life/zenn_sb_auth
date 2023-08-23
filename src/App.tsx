import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isPage, setIsPage] = useState(false);
  const changeAuth = (): void => {
    setIsPage(!isPage);
  };

  return (
    <>
      {isPage ? (
        <Signup changeAuth={changeAuth} />
      ) : (
        <Login changeAuth={changeAuth} />
      )}
    </>
  );
}

export default App;
