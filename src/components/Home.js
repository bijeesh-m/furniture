import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Navbar, Container } from "react-bootstrap";
import { myContext } from "../App";
import { Grid } from "@mui/material";
import axios from "axios";
const Home = () => {
  const { products, setProducts } = useContext(myContext);
  const { cartItems } = useContext(myContext);
  const { count, setCount } = useContext(myContext);
  const [searchItem, setSearchItem] = useState("");
  const { currentUser } = useContext(myContext);
  const { isLogin } = useContext(myContext);
  const [fdata, setFdata] = useState(products);

  useEffect(() => {
    if (!isLogin) {
      setCount(0);
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/products", { withCredentials: true })
      .then((res) => {
        setProducts(res.data.data);
      });
  }, [searchItem]);
  console.log(products);

  // useEffect(() => {
  //   setProducts([]);

  // },[]);

  const handleCkick = (obj) => {
    if (!isLogin) {
      alert("Pls Login");
    } else {
      const isItemInCart = cartItems.some((item) => item.name === obj.name);
      if (isItemInCart) {
        alert("Item already added to cart");
      } else {
        setCount(count + 1);
        alert("Item added to cart");
        cartItems.push(obj);
      }
    }
  };

  // const username = currentUser.map((data) => data.username);

  useEffect(() => {
    if (searchItem !== "") {
      const filterData = products.filter((obj) => {
        return obj.title.toLowerCase().includes(searchItem.toLowerCase());
      });
      setFdata(filterData);
    } else {
      setFdata(products);
    }
  }, [searchItem,products]);

  return (
    <div id="hom-main-div">
      <Navbar sticky="top" className=" bg-body-tertiary mb-5">
        <Container>
          <input
            className="home-search-box "
            name="search"
            type="text"
            id="search"
            placeholder="Search "
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <img
            id="nav-image"
            width="219"
            height="47"
            src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg"
            alt="img"
          />
          <div className="icons">
            {!isLogin ? (
              <Link to="/login">
                <Button id="btn-home-login" className="rounded-1">
                  <span id="login-text">Login</span>
                </Button>
              </Link>
            ) : (
              <>
                <h4 id="username">username</h4>
                <Link to="/Account">
                  <img
                    id="account-icon"
                    width="32"
                    height="32"
                    src="https://ii1.pepperfry.com/assets/w38-profile-icon.svg"
                    alt="img"
                  />
                </Link>
              </>
            )}

            <Link to="/Cart" style={{ textDecoration: "none" }}>
              <img
                id="cart-icon"
                width="32"
                height="32"
                src="https://ii1.pepperfry.com/assets/w38-cart-icon.svg"
                alt="img"
              />
              <span id="count-number" style={{ color: "black" }}>
                {count}
              </span>
            </Link>
          </div>
        </Container>
      </Navbar>
      <Grid>
        <Grid
          // lg={5}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {fdata
            // : products
            //     .filter((obj) => {
            //       if (
            //         obj.name.toLowerCase().includes(searchItem.toLowerCase())
            //       ) {
            //         return obj;
            //       }
            //       return null;
            //     })
            .map((obj) => {
              return (
                <Card
                  key={obj._id}
                  className="card-div mb-3 home-card rounded-0"
                  style={{
                    width: "12rem",
                    height: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Card.Img
                    className="rounded-0"
                    variant="top"
                    src={obj.image}
                  />
                  <Card.Body
                    id="hom-card-body"
                    style={{
                      width: "12rem",
                      height: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ color: "grey" }}>{obj.title}</p>
                    <h6>₹ {obj.price}</h6>
                    <Button
                      className="rounded-0"
                      id="btn-addtocart"
                      onClick={() => {
                        handleCkick(obj);
                      }}
                      variant="primary"
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
