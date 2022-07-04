import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import project_logo from "../../components/cable-car-cabin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Login.css";
import "../../App.css";
import { auth } from "../../Config/firebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const getData = (val) => {
    console.log(val.target.value);
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("logged in");
      history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {};
  return (
    <div className="App">
      <div></div>
      <div className="wrapper">
        <div className="content">
          <div className="logo">
            <img src={project_logo} alt="" />
          </div>
          <div className="form">
            <div className="c1">
              <h2>Start your journey here!</h2>
            </div>
            <form className="form">
              <div className="eInput">
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input
                  className="inputinfo"
                  type="text"
                  id="input1"
                  placeholder="Enter email address"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
              </div>
              <div className="eInput">
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input
                  className="inputinfo"
                  type="text"
                  id="input2"
                  placeholder="Enter password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
              <div className="forgotpass">
                <a href="/fogotpass">Forgot password?</a>
              </div>
              <div>
                <button type="button" className="submit" onClick={login}>
                  {
                    <Link
                      to="/home"
                      type="button"
                      className="btn shadow-none"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        fontFamily: "Fira code",
                      }}
                    ></Link>
                  }
                  Login
                </button>
              </div>
              <div>
                <button type="button" className="homebtn">
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      border: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    Register
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
