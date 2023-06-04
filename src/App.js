import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreateStory from "./Pages/CreateStory";
import Login from "./Pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/Login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/Login"> Login </Link>
        ) : (
          <>
            <Link to="/CreateStory"> Create Story </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/CreateStory" element={<CreateStory isAuth={isAuth} />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;