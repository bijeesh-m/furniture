import React, { useContext, useState } from "react";
import { Button, FloatingLabel, FormControl } from "react-bootstrap";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    prize: "",
    path: "",
  });
  const navigate = useNavigate();
  const { products } = useContext(myContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleClick = () => {
    if (!inputValue.name || !inputValue.path || !inputValue.prize) {
      alert("All fields are require");
    } else {
      products.push(inputValue);
      alert("Product Added Successfully");
      navigate("/Admin/ProductList");
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{ textAlign: "center", margin: "15px" }}
      >
        <h3>Add Products</h3>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%", display: "flex" }}>
          <div className="preview-card">
            <div style={{ height: "50%" }}>
              <img width="100%" src={inputValue.path} alt="img" />
            </div>
            <div>
              <p style={{ color: "grey" }}>{inputValue.name}</p>
            </div>
            <div>
              <h6>{inputValue.prize}</h6>
            </div>
          </div>

          <div style={{ width: "80%" }}>
            <FloatingLabel label="Product Name">
              <FormControl
                className="mb-3"
                onChange={handleChange}
                type="text "
                name="name"
                value={inputValue.name}
                placeholder="Product Name"
              />
            </FloatingLabel>
            <FloatingLabel label="Product Price">
              <FormControl
                className="mb-3"
                onChange={handleChange}
                type="number"
                name="prize"
                value={inputValue.prize}
                placeholder="Product Price"
              />
            </FloatingLabel>
            <FloatingLabel label="Image Source">
              <FormControl
                onChange={handleChange}
                type="url "
                name="path"
                value={inputValue.path}
                placeholder="Image Source"
              />
            </FloatingLabel>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button id="prod-add-button" onClick={handleClick}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
