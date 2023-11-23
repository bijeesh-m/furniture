import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// const adminData = {
//   username: "Bijeesh",
//   password: "859071",
// };

const AdminLogin = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleClick = () => {
    // try {
    // const response = await axios.post('http://localhost:3000/admin/login',inputValue,{withCredentials:true})
    // console.log(response.data)
    // navigate('/admin')
    // } catch (err) {
    //   console.log(err.message)
    //   alert(err.message)
    // }
    axios
      .post("http://localhost:3000/admin/login", inputValue, {
        withCredentials: true,
      })
      .then((res) => navigate("/admin"))
      .catch((err) => alert(err.message));

    // if (!inputValue.username) {
    //   alert("pls fill the form");
    // } else if (!inputValue.password) {
    //   alert("pls fill the form");
    // }
    // } else if (inputValue.username !== adminData.username) {
    //   alert("incorrect username");
    // } else if (inputValue.password !== adminData.password) {
    //   alert("incorrect password");
    // } else {
    //   navigate("/Admin");
    // }
  };
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1>AdminLogin</h1>
      </div>
      <div className="Admin-login">
        <Form className="form1" onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Uername</FormLabel>
            <FormControl
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Enter your name"
              value={inputValue.name}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter your password"
              value={inputValue.password}
            />
          </FormGroup>
          <Button onClick={handleClick} variant="success">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AdminLogin;
