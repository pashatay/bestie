import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
const Context = React.createContext();

function ContextProvider(props) {
  const formDefaultValues = {
    name: "",
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(formDefaultValues);

  const loggedUserDefaultValues = {
    id: "",
    token: ""
  };
  const [loggedUserValues, setLoggedUserValues] = useState(
    loggedUserDefaultValues
  );

  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [anError, setAnError] = useState("");

  const handleChange = e => {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value.trim()
    }));
  };

  const handleSubmitSignUp = e => {
    setAnError("");
    e.preventDefault();
    if (formValues.password === confirmedPassword) {
      axios
        .post("http://localhost:8000/signup", formValues)
        .then(res => {
          console.log(res);
          setAnError("Congrats!Your account was created.Now you can login");
        })
        .catch(err => {
          console.log(err);
          setAnError("Something went wrong!Check your name or email!");
        });
    } else {
      setAnError("Passwords dont match!");
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    setAnError("");
    axios
      .post("http://localhost:8000/login", formValues)
      .then(res => {
        console.log(res.data);
        userLoggedIn(res.data);
      })
      .catch(err => {
        console.log(err);
        setAnError("Something went wrong!Check your name or email!");
      });
  };

  const userLoggedIn = data => {
    console.log(props);
    setLoggedUserValues({ id: data.id, token: data.token });
  };

  return (
    <Context.Provider
      value={{
        userLoggedIn,
        loggedUserValues,
        anError,
        setAnError,
        formValues,
        handleChange,
        confirmedPassword,
        setConfirmedPassword,
        handleSubmitSignUp,
        handleSubmitLogin
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
