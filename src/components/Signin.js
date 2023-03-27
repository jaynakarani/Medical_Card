import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from "axios"
const  Signin = () => {
   const [credentials, setcredentials] = useState({ userId: "", password: "" });
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:4000/api/auth/login',{
      userId: credentials.userId,
      password: credentials.password,
    })

    console.log(response.data);

    if (response.data) {
      Navigate("/");
    } else {
      // alert("Invalid Credential");
    }
  };

  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="div-center"
      style={{
        width: "400px",
        height: "400px",
        backgroundcolor: "#fff",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        margin: "auto",
        maxwidth: "100%",
        maxheight: "100%",
        overflow: "auto",
        padding: " 1em 2em",
        borderbottom: " 2px solid #ccc",
        display: "table",
      }}
    >
      <h3 className="">Sign in</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="userId">User Id</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={credentials.userId}
            name="userId"
            onChange={onchange}
            placeholder="ID"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onchange}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
         <button type="submit" className="btn btn-primary my-3" onClick={Signin}>
          sign in
        </button>
        <hr />

        <button type="button" className="btn btn-link">
          Forgot Password?
        </button>
      </form>
    </div>
  );
}

export default Signin;


