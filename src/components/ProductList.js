import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../App";
import axios from "axios";
const ProductList = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(myContext);
  const handleClick = (id) => {
    const udata = products.filter((item) => item.id !== id);
    setProducts(udata);
    navigate("/Admin/ProductList");
  };
  useEffect(()=>{
    axios.get('http://localhost:3000/admin/product',{withCredentials:true})
    .then((res)=>setProducts(res.data.data))
    .catch((err)=>console.log(err))
  },[setProducts])

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
              <Card.Img className="rounded-0" variant="top" src={item.image} />
              <Card.Body
                style={{
                  width: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: "grey" }}>{item.title}</p>
                <h6>₹ {item.price}</h6>
                <div>
                  <Link to={`/Admin/ProdEdit/${item._id}`}>
                    <Button className="mx-1" variant="primary">
                      Edit
                    </Button>
                  </Link>

                  <Button onClick={() => handleClick(item._id)} variant="danger">
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
