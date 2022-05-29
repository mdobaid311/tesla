import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu/Menu.jsx";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Signup from "./components/Signup/Signup";
import TeslaAccount from "./components/TeslaAccount/TeslaAccount";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </div>
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/teslaaccount" /> : <Login />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/teslaaccount"
            element={
              user ? (
                <Navigate to="/login" />
              ) : (
                <TeslaAccount isMenuOpen={isMenuOpen} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
