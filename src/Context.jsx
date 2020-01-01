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
          setAnError(
            "Almost done! Please check your email for the link to verify your account."
          );
        })
        .catch(err => {
          console.log({ err });
          setAnError(err.response.data.error.message);
        });
    } else {
      setAnError("Passwords don't match!");
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", formValues)
      .then(res => {
        userLoggedIn(res.data);
        setRedirectTask(true);
        setAnError("");
      })
      .catch(err => {
        setRedirectTask(false);
        console.log({ err });
        setAnError(err.response.data.error.message);
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
        setUserData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const redirectToMainPage = () => {
    return redirectTask ? <Redirect to="/" /> : false;
  };

  const handleSubmitChangeEmail = e => {
    formValues.password = "";
    e.preventDefault();
    axios
      .post("http://localhost:8000/mainpage", formValues, { headers })
      .then(res => {
        setAnError(res.data.message.message);
        setUserHasLoggedIn(false);
      })
      .then(setFormValues(formDefaultValues))
      .catch(err => {
        console.log(err.response.data.error.message);
        setAnError(err.response.data.error.message);
      });
  };
  const handleSubmitChangePassword = e => {
    formValues.email = "";
    if (formValues.password != confirmedPassword) {
      e.preventDefault();
      setAnError("Passwords don't match!");
    } else {
      e.preventDefault();
      axios
        .post("http://localhost:8000/mainpage", formValues, { headers })
        .then(setUserHasLoggedIn(false))
        .then(res => {
          setAnError(res.data.message.message);
        })
        .then(setFormValues(formDefaultValues))
        .catch(err => {
          console.log({ err });
          setAnError(err.response.data.error.message || "error");
        });
    }
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
        setUserHasLoggedIn,
        handleSubmitChangeEmail,
        handleSubmitChangePassword
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
