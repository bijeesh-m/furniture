import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../App";
const ProductList = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(myContext);
  const handleClick = (id) => {
    const udata = products.filter((item) => item.id !== id);
    setProducts(udata);
    navigate("/Admin/ProductList");
  };

  return (
    <div style={{ marginLeft: "5px", marginRight: "5px" }}>
      <div
        style={{
          marginLeft: "",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "14%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            height: "80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <b>
            <h3>Product List</h3>
          </b>
        </div>
        <div
          style={{
            display: "flex",
            height: "80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/Admin/Addproduct">
            <Button variant="success">Add new product</Button>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          marginTop: "30px",
        }}
      >
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              className="ms-1 mx-1 mb-2 home-card rounded-0"
              style={{
                width: "15rem",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Card.Img className="rounded-0" variant="top" src={item.path} />
              <Card.Body
                style={{
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: "grey" }}>{item.name}</p>
                <h6>₹ {item.prize}</h6>
                <div>
                  <Link to={`/Admin/ProdEdit/${item.id}`}>
                    <Button className="mx-1" variant="primary">
                      Edit
                    </Button>
                  </Link>

                  <Button onClick={() => handleClick(item.id)} variant="danger">
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
