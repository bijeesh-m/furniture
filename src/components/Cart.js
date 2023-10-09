import React, { useContext } from "react";
import { myContext } from "../App";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(myContext);
  const { count, setCount } = useContext(myContext);
  const handleClick = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCount(count - 1);
    setCartItems(updatedCart);
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        return item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      })
    );
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  return (
    <>
      <h1 className="mb-5 mt-2" style={{ width: "100%", textAlign: "center" }}>
        Your Cart
      </h1>

      <div>
        {cartItems.map((item) => {
          const totalPrice = item.prize * item.qty;
          return (
            <div
              key={item.id}
              className="mb-5"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                height: "50vh",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  width: "600px",
                  display: "flex",
                  backgroundColor: "rgb(235, 235, 232)",
                }}
              >
                <div
                  style={{
                    width: "250",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    padding: "5px",
                  }}
                >
                  <img src={item.path} alt="" width="200" height="200" />
                  <Button
                    id="cart-delete-btn"
                    className="mt-3 rounded-0"
                    onClick={() => handleClick(item.id)}
                  >
                    Delete
                  </Button>
                  <Link to="/Payment">
                    <Button id="cart-buy-btn" className="mt-2 rounded-0">
                      Buy
                    </Button>
                  </Link>
                </div>
                <Card className="m-1 sm-5 md-6 lg-6" style={{ width: "400px" }}>
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Card.Title>{item.name}</Card.Title>
                    <div>
                      <Button
                        id="cart-qty-btn"
                        className="m-2 rounded-0"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </Button>
                      Qty : {item.qty}
                      <Button
                        id="cart-qty-btn"
                        className="m-2 rounded-0"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </Button>
                    </div>

                    <h6>ITEM PRICE : ₹ {totalPrice}</h6>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
