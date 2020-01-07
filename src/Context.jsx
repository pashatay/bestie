import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import config from "./config";

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
  const [aMessage, setAMessage] = useState("");
  const [userData, setUserData] = useState([]);
  const [redirectTask, setRedirectTask] = useState(false);
  const [wasAbleToSignUp, setWasAbleToSignUp] = useState(false);
  const [disableInput, setDisableInput] = useState(false);

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
    setDisableInput(true);
    if (formValues.password === confirmedPassword) {
      axios
        .post(`${config.API_ENDPOINT}/signup`, formValues)
        .then(res => {
          setWasAbleToSignUp(true);
          setAMessage(
            "Almost done! Please check your email for the link to verify your account."
          );
          setAnError("");
        })
        .catch(err => {
          setDisableInput(false);
          setAnError(err.response.data.error.message);
          setAMessage("");
        });
    } else {
      setDisableInput(false);
      setAnError("Passwords don't match!");
      setAMessage("");
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    axios
      .post(`${config.API_ENDPOINT}/login`, formValues)
      .then(res => {
        userLoggedIn(res.data);
        setRedirectTask(true);
        setAnError("");
      })
      .catch(err => {
        setRedirectTask(false);
        if (
          err.response.data.error.message ===
          "Please verify your account first."
        ) {
          setAMessage(err.response.data.error.message);
          setAnError("");
        } else {
          setAnError(err.response.data.error.message);
          setAMessage("");
        }
      });
  };

  const userLoggedIn = data => {
    localStorage.setItem("access_token", `bearer ${data.token}`);
    setUserHasLoggedIn(true);
  };

  const getDataForUserMainPage = () => {
    axios
      .get(`${config.API_ENDPOINT}/mainpage`, { headers })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        //console.log(err);
      });
  };
  const redirectToMainPage = () => {
    return redirectTask ? <Redirect to="/" /> : false;
  };

  const handleSubmitChangeEmail = e => {
    formValues.password = "";
    e.preventDefault();
    axios
      .post(`${config.API_ENDPOINT}/mainpage`, formValues, { headers })
      .then(res => {
        setAnError(res.data.message.message);
        setUserHasLoggedIn(false);
      })
      .then(setFormValues(formDefaultValues))
      .catch(err => {
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
        .post(`${config.API_ENDPOINT}/mainpage`, formValues, { headers })
        .then(setUserHasLoggedIn(false))
        .then(res => {
          setAnError(res.data.message.message);
        })
        .then(setFormValues(formDefaultValues))
        .catch(err => {
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
        handleSubmitChangePassword,
        aMessage,
        setAMessage,
        wasAbleToSignUp,
        setWasAbleToSignUp,
        disableInput,
        setDisableInput
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
