import React, { useState, useEffect } from "react";
import axios from "axios";

function Signup() {
  const formDefaultValues = {
    name: "",
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value.trim()
    }));
  }

  const checkPasswords = e => {
    const target = e.target;
    return formValues.password === target.value ? true : false;
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/signup", formValues)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        setIsError(true);
      });
  }

  return (
    <div>
      <form onSubmit={checkPasswords ? handleSubmit : console.log("false pas")}>
        <input
          required
          type="text"
          placeholder="name"
          name={"name"}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="re-enter password"
          onChange={checkPasswords}
        />
        <input type="submit"></input>
      </form>
      <h4>
        {isError ? `${formValues.email} is incorrect or already exist!` : false}
      </h4>
    </div>
  );
}

export default Signup;
