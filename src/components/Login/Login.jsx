import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            // password: userAuth.user.password,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        navigate("/teslaaccount");
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login_header">
        <div className="login_logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login_language">
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="login_info">
        <h1>Sign In</h1>
        <form className="login_form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Passowrd</label>
          <input
            type="password"
            name=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
        <div className="login_divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary
            name="create account"
            type="submit"
            onClick={signUp}
          />
        </Link>
      </div>
    </div>
  );
};

export default Login;
