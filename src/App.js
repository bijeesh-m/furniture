import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Payment, { Debitcard, Netbanking, Upi } from "./components/Payment";
import { createContext, useEffect, useState } from "react";
import Account from "./components/Account";
import Admin from "./components/Admin";
import Users from "./components/Users";
import AdminLogin from "./components/AdminLogin";
import ProductList from "./components/ProductList";
import ProdEdit from "./components/ProdEdit";
// import { furnicture } from "./components/img";
import AddProduct from "./components/AddProduct";
import axios from "axios";

export const myContext = createContext();

function App() {
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/product", { withCredentials: true })
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <myContext.Provider
      value={{
        isSubmit,
        setIsSubmit,
        isLogin,
        setIsLogin,
        cartItems,
        setCartItems,
        count,
        setCount,
        userData,
        setUserData,
        currentUser,
        setCurrentUser,
        products,
        setProducts,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />}>
            <Route path="/Payment/upi" element={<Upi />} />
            <Route path="/Payment/debitcard" element={<Debitcard />} />
            <Route path="/Payment/netbanking" element={<Netbanking />} />
          </Route>
          <Route path="/Account" element={<Account />} />
          <Route path="/Admin" element={<Admin />}>
            <Route path="/Admin" element={<Users />} />
            <Route path="/Admin/ProductList" element={<ProductList />} />
            <Route path="/Admin/ProdEdit/:id" element={<ProdEdit />} />
            <Route path="/Admin/Addproduct" element={<AddProduct />} />
          </Route>
          <Route path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </myContext.Provider>
  );
}

export default App;
