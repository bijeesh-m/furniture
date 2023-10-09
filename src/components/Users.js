import React, { useContext, useState } from "react";
import { myContext } from "../App";
import { Card, Form } from "react-bootstrap";
const Users = () => {
  const { userData } = useContext(myContext);
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div className="User">
        <Card className="users-search-card">
          <Form.Control
            onChange={handleChange}
            type="text"
            name="search"
            value={searchItem}
            placeholder="Search Users"
          />
        </Card>
      </div>

      <div className="users-div">
        {userData
          .filter((data) => {
            if (
              data.username.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return data;
            }
            return null;
          })
          .map((data) => {
            return (
              <div key={data.username} className="userDetails">
                <div></div>

                <img
                  style={{ marginTop: "7px" }}
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/gender-neutral-user--v2.png"
                  alt="gender-neutral-user--v2"
                />

                <div>
                  <h5 className="ms-2 mt-1">{data.username}</h5>
                  <h6 className="ms-2 ">{data.email}</h6>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Users;
