import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="Admin">
      <div className="left-Admin-page">
        <div
          style={{
            textAlign: "center",
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
          }}
        >
          <h1 className="text-light mb-5">Admin</h1>
        </div>
        <Link to="/Admin" style={{ textDecoration: "none" }}>
          <div>
            <div className="Admin-user-text">
              <div style={{ marginLeft: "20%" }}>Users</div>
            </div>
          </div>
        </Link>
        <Link to="/Admin/ProductList" style={{ textDecoration: "none" }}>
          <div>
            <div className="Admin-user-text">
              <div style={{ marginLeft: "20%" }}>Product List</div>
            </div>
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="Admin-user-text">
            <div style={{ marginLeft: "20%" }}>Home</div>
          </div>
        </Link>
      </div>

      <div className="Right-Admin-page" id="scrollbar">
        <nav
          style={{
            position: "sticky",
            top: "0",
            boxShadow: "5px 5px 10px #888888",
          }}
          className="admin-navbar"
        >
          <div className="container-fluid ">
            <div
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily: "Trattatello",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Hello Bijeesh..&nbsp;&nbsp;</h1>
              <img
                width="40"
                height="40px"
                src="https://img.icons8.com/emoji/48/waving-hand-light-skin-tone.png"
                alt="waving-hand-light-skin-tone"
              />
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
