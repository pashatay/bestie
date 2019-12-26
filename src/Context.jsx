import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);
  const [anError, setAnError] = useState("");
  const [userData, setUserData] = useState([]);
  const [redirectTask, setRedirectTask] = useState(false);

  const headers = {
    Authorization: localStorage.getItem("access_token")
  };

  const handleChange = e => {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value.trim()
    }));
  };

  const handleSubmitSignUp = e => {
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
          setAnError("User is already exist!Check your name or email!");
        });
    } else {
      setAnError("Passwords dont match!");
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", formValues)
      .then(res => {
        console.log(res.data);
        userLoggedIn(res.data);
      })
      .then(() => {
        getDataForUserMainPage();
      })
      .catch(err => {
        console.log(err);
        setAnError("Something went wrong!Check your email or password!");
      });
  };

  const userLoggedIn = data => {
    localStorage.setItem("access_token", `bearer ${data.token}`);
    setUserHasLoggedIn(true);
  };

  const getDataForUserMainPage = () => {
    axios
      .get("http://localhost:8000/mainpage", { headers })
      .then(res => {
        //setData is not working
        setUserData(res.data);
      })
      .then(setRedirectTask(true))
      .catch(err => {
        console.log(err);
      });
  };
  const redirectToMainPage = () => {
    return redirectTask ? <Redirect to="/" /> : false;
  };
  return (
    <Context.Provider
      value={{
        userLoggedIn,
        anError,
        setAnError,
        formValues,
        handleChange,
        confirmedPassword,
        setConfirmedPassword,
        handleSubmitSignUp,
        handleSubmitLogin,
        userData,
        getDataForUserMainPage,
        setRedirectTask,
        headers,
        redirectTask,
        redirectToMainPage,
        userHasLoggedIn,
        setUserHasLoggedIn
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
