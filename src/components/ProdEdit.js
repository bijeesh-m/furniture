import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import { myContext } from "../App";

const ProdEdit = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(myContext);
  const { id } = useParams();

  const currentProd = products.find((prod) => prod.id === id);

  const [pName, setName] = useState(currentProd.name);
  const [imgPath, setImgPath] = useState(currentProd.path);
  const [price, setPrice] = useState(currentProd.prize);

  const handleSave = () => {
    const updatedProd = {
      ...currentProd,
      name: pName,
      prize: price,
      path: imgPath,
    };

    const index = products.findIndex((prod) => prod.id === currentProd.id);

    const updatedProducts = [...products];
    updatedProducts[index] = updatedProd;

    setProducts(updatedProducts);
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
          .filter((item) => item.id === id)
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
                    src={imgPath}
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
                    value={pName}
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
                    value={imgPath}
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
