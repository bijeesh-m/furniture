import React, { useContext } from "react";
import { myContext } from "../App";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(myContext);
  const { currentUser } = useContext(myContext);
  const username = currentUser.map((data) => {
    return data.username; // Assuming 'username' is a property in 'data'
  });
  const email = currentUser.map((data) => {
    return data.email; // Assuming 'username' is a property in 'data'
  });
  const handleClick = () => {
    setIsLogin(false);
    navigate("/");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Account</h1>
      <h4 style={{ textAlign: "center" }}>Username : {username}</h4>
      <h4 style={{ textAlign: "center" }}>Email : {email}</h4>
      <div
        className="mt-5"
        style={{ display: "flex", width: "100%", justifyContent: "center" }}
      >
        <Button onClick={handleClick} variant="danger">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Account;
