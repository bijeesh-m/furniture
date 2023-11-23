import React, {  useEffect, useState } from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Form,
  Modal,
} from "react-bootstrap";
// import { myContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputValues, setValues] = useState({
    username: "",
    email: "",
    password: "",
    // cpassword: "",
  });
  // const [err, setErr] = useState("");
  const [inputErrors, setInputErrors] = useState({});
  // const { setIsSubmit } = useContext(myContext);
  // const { userData } = useContext(myContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [smShow, setSmShow] = useState(false);

  useEffect(() => {}, []);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...inputValues, [name]: value });
  };

  // const handleSubmit =  (e) => {
  //   e.preventDefault();
  //   setInputErrors(validate(inputValues));
  //   axios
  //   .post("http://localhost:3000/user/register", inputValues)
  //   .then((response) => console.log(response))
  //   .catch((err) => setErr(err.response.data.message));
  //   setIsSubmit(true);
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Before axios.post");
    setInputErrors(validate(inputValues));
  
    try {
      const response = await axios.post("http://localhost:3000/user/register", inputValues);
      console.log(response);
      setSmShow(true)
    } catch (error) {
      alert(error.response.data.message)
    }
    // setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.username) {
      errors.username = "username is required";
    } else if (values.username.length < 3) {
      errors.username = "the username should have minimum 3 characters";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "enter a valid email";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 3) {
      errors.password = "the password should have minimum 3 characters";
    }
    // else if(!values.cpassword){
    //   errors.cpassword = "conforrm the  password";
    // }else if(values.password !== values.cpassword) {
    //     errors.cpassword = "doesn't match the above password";
    // }
    // if () {
    //   
    // } else if (values.password !== values.cpassword) {
    //   errors.cpassword = "doesn't match the above password";
    // }
    

    return errors;
  };

  return (
    <div className="container" style={{ width: "400px", height: "200px" }}>
      <Modal
        size="m"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Registered Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </Modal.Body>
      </Modal>
      <h3 className="mb-5 mt-3" style={{ textAlign: "center" }}>
        Register
      </h3>
      <Form noValidate onSubmit={handleSubmit} className="form2  ">
        <FormGroup className="mb-3">
          <FormLabel>Username</FormLabel>
          <FormControl
            className="form2-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={inputValues.name}
            onChange={handleChange}
          />
          <p>{inputErrors.username}</p>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel className="mb-3">Email</FormLabel>
          <FormControl
            className="form2-input"
            pattern=""
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputValues.email}
            onChange={handleChange}
          />
          <p>{inputErrors.email}</p>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel className="mb-3">Password</FormLabel>
          <div className="input-group">
            <FormControl
              className="form2-input"
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={inputValues.password}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <p>{inputErrors.password}</p>
        </FormGroup>
        <FormGroup className="mb-3">
          {/* <FormLabel className="mb-3">Confirm password</FormLabel>
          <div className="input-group">
            <FormControl
              className="form2-input"
              type={passwordVisible ? "text" : "password"}
              name="cpassword"
              placeholder="Re-enter password"
              value={inputValues.cpassword}
              onChange={handleChange}
            /> */}
          {/* <div className="input-group-append">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          </div> */}
          {/* <p>{inputErrors.cpassword}</p> */}
        </FormGroup>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button className="btn btn-primary">Register </button>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Already Registered ?<Link to="/login"> Login</Link>
        </span>
      </Form>
    </div>
  );
};

export default Register;
