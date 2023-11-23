import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import { myContext } from "../App";
import axios from "axios";

const ProdEdit = () => {
  const navigate = useNavigate();
  const { products } = useContext(myContext);
  const { id } = useParams();

  useEffect(() => {});

  const currentProd = products.find((prod) => prod._id === id);
  const [title, setName] = useState(currentProd.title);
  const [image, setImgPath] = useState(currentProd.image);
  const [price, setPrice] = useState(currentProd.price);

  const handleSave = () => {
    axios
      .put(
        `http://localhost:3000/admin/products/${id}`,
        { image, price, title },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .then((err) => console.log(err));

    alert("Product Updated Successfull");
    navigate("/Admin/ProductList");
  };

  return (
    <>
      <div className="main-prod-edit-div">
        <div style={{ height: "80px", display: "flex", alignItems: "center" }}>
          <b>
            <h4>Product Editor</h4>
          </b>
        </div>

        {products
          .filter((item) => item._id === id)
          .map((itm) => {
            return (
              <div key={itm.id} className="ProdEdit-div">
                <div
                  style={{
                    width: "40%",
                    height: "50%",
                  }}
                >
                  <img
                    style={{ width: "90%", padding: "5px" }}
                    src={image}
                    alt="img"
                  />
                </div>

                <div
                  style={{
                    width: "70%",
                  }}
                >
                  <label>Name:</label>

                  <Form.Control
                    as="textarea"
                    rows={2}
                    className="mb-2"
                    style={{ width: "80%" }}
                    type="text"
                    name="name"
                    value={title}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Price:</label>

                  <FormControl
                    className="mb-2"
                    style={{ width: "80%" }}
                    type="number"
                    name="description"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label>Image Source :</label>

                  <FormControl
                    className="mb-2"
                    style={{ width: "80%" }}
                    type="text"
                    name="description"
                    value={image}
                    onChange={(e) => setImgPath(e.target.value)}
                  />

                  <Button className="mb-1" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProdEdit;
