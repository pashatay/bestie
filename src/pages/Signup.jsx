import React, { useState, useEffect } from "react";
import axios from "axios";

function Signup() {
  const formDefaultValues = {
    name: "",
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(formDefaultValues);

  function handleChange(e) {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/signup", formValues).then(res => {
      console.log(res);
    });
  }
  console.log(formValues);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name={"name"}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
        />
        <input type="password" placeholder="re-enter password" />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Signup;
