import React, { useContext, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../App";
import axios from "axios";

const Login = () => {
  // const { userData } = useContext(myContext);
  const { setIsLogin } = useContext(myContext);
  const [inputValue, setValues] = useState({
    username: "",
    password: "",
  });
  const {setCurrentUser } = useContext(myContext);
  // const [currentUser,setCurrentUser] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...inputValue, [name]: value });
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        inputValue,{withCredentials:true}
      );
      console.log(response);
      setIsLogin(true);
      setCurrentUser(inputValue.username)
      navigate("/");
    } catch (err) {
      // alert(err.response.data.message);
    }

    // if (!inputValue.username) {
    //   alert("pls fill the form");
    // } else if (!inputValue.password) {
    //   alert("pls fill the form");
    // } else {
    //   if (foundUser) {
    //     setIsLogin(true);
    //     const updateCurrentUser = userData.filter(
    //       (data) => data.username === inputValue.username
    //     );
    //     setCurrentUser(updateCurrentUser);
    //     navigate("/");
    //   } else {
    //     alert("incorrect usename or password");
    //   }
    // }

    //   if (!foundUsername) {
    //     alert("incorrect username");
    //   } else if (!foundPassword) {
    //     alert("incorrect password");
    //   } else {
    //     setIsLogin(true);

    //   navigate("/");
    // }
  };
  // currentUser.userName = inputValue.username;
  // currentUser.userPass = inputValue.password;
  // currentUser.userMail = inputValue.email;

  return (
    <div className="container" style={{ width: "400px" }}>
      <h3 className="mb-5 mt-3" style={{ textAlign: "center" }}>
        Login
      </h3>
      <Form noValidate className="form1" onSubmit={handleSubmit}>
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
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button onClick={handleClick} variant="success">
            Login
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <span className="mt-3">
            Don't have account ? &nbsp;<Link to="/Register"> Register</Link>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="admin-button mt-3">
            <Link to="/AdminLogin">
              <Button
                style={{
                  width: "100px",
                  height: "20px",
                  fontSize: "10px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Admin Login
              </Button>
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Login;
