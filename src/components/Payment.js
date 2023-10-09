import { Card, ListGroup } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Payment Section</h2>
      <div
        className="container mt-5"
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <ListGroup>
            <Link style={{ textDecoration: "none" }} to="/Payment/upi">
              <ListGroup.Item className="pay">UPI</ListGroup.Item>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Payment/debitcard">
              <ListGroup.Item className="pay">Debit Card</ListGroup.Item>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/Payment/netbanking">
              <ListGroup.Item className="pay">Net Banking</ListGroup.Item>
            </Link>
          </ListGroup>
        </Card>
      </div>
      <div
        className="mt-5"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export const Upi = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>Upi</div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>UPI ID : </label>
        <input type="id" name="upi-id" placeholder="example@upi" />
        <br />
        <br />
        <label>Mob : </label>
        <input type="number" name="mob-number" placeholder="Mobile Number" />
        <br />
        <br />
        <button>Pay</button>
      </form>
    </div>
  );
};

export const Debitcard = () => {
  return <div>Debitcard</div>;
};
export const Netbanking = () => {
  return <div>Netbanking</div>;
};

export default Payment;
