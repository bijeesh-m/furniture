import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Navbar, Container } from "react-bootstrap";
import { myContext } from "../App";
const Home = () => {
  const { products } = useContext(myContext);
  const { cartItems } = useContext(myContext);
  const { count, setCount } = useContext(myContext);
  const [searchItem, setSearchItem] = useState("");
  const { currentUser } = useContext(myContext);
  const { isLogin } = useContext(myContext);

  if (!isLogin) {
    setCount(0);
  }

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

  const username = currentUser.map((data) => data.username);

  return (
    <div id="hom-main-div">
      <Navbar sticky="top" expand="lg" className="bg-body-tertiary mb-5">
        <Container>
          <input
            className="home-search-box"
            name="search"
            type="text"
            id="search"
            placeholder="Search here.."
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <img
            width="219"
            height="47"
            src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg"
            alt="img"
          />
          <div className="icons">
            {!isLogin ? (
              <Link to="/login">
                <Button id="btn-home-login" className="rounded-1">
                  Login
                </Button>
              </Link>
            ) : (
              <>
                <h4>{username}</h4>
                <Link to="/Account">
                  <img
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
              <span style={{ color: "black" }}>{count}</span>
            </Link>
          </div>
        </Container>
      </Navbar>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {products
          .filter((obj) => {
            if (obj.name.toLowerCase().includes(searchItem.toLowerCase())) {
              return obj;
            }
            return null;
          })
          .map((obj) => {
            return (
              <Card
                key={obj.id}
                id=""
                className="rounded-0 m-1 home-card "
                style={{
                  width: "12rem",
                  height: "auto",
                  display: "flex",
                  justifyContent: "space-between",

                  border: "",
                }}
              >
                <Card.Img className="rounded-0" variant="top" src={obj.path} />
                <Card.Body
                  style={{
                    width: "12rem",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // borderRadius:'none',
                    // border:'1px solid black'
                  }}
                >
                  <p style={{ color: "grey" }}>{obj.name}</p>
                  <h6>₹ {obj.prize}</h6>
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
      </div>
    </div>
  );
};

export default Home;
