import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import AdminDashboard from "./components/AdminDashboard";
import YourOrders from "./pages/YourOrders";
import TrackOrder from "./pages/TrackOrder";
import LoginSecurity from "./pages/LoginSecurity";
import YourAddress from "./pages/YourAddress";
import PaymentOptions from "./pages/PaymentOptions";
import ContactUs from "./pages/ContactUs";
import Deals from "./pages/Deals";
import CustomerService from "./pages/CustomerService";
import Registry from "./pages/Registry";
import GiftCards from "./pages/GiftCards";
import Wallet from "./pages/Wallet";
import Sell from "./pages/Sell";
import UPI from "./pages/UPI";
import { useStateContext } from "./context/StateContext";

const PrivateRoute = ({ children }) => {
  const { state } = useStateContext();
  return state.isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const { state } = useStateContext();

  return (
    <Router>
      {state.isAuthenticated && <NavBar />}
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/product/:id" element={<PrivateRoute><ProductDetailPage /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><YourOrders /></PrivateRoute>} />
          <Route path="/track/:orderId" element={<PrivateRoute><TrackOrder /></PrivateRoute>} />
          <Route path="/account/login-security" element={<PrivateRoute><LoginSecurity /></PrivateRoute>} />
          <Route path="/account/address" element={<PrivateRoute><YourAddress /></PrivateRoute>} />
          <Route path="/account/payment" element={<PrivateRoute><PaymentOptions /></PrivateRoute>} />
          <Route path="/account/payment/upi" element={<PrivateRoute><UPI /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
          <Route path="/deals" element={<PrivateRoute><Deals /></PrivateRoute>} />
          <Route path="/customer-service" element={<PrivateRoute><CustomerService /></PrivateRoute>} />
          <Route path="/registry" element={<PrivateRoute><Registry /></PrivateRoute>} />
          <Route path="/gift-cards" element={<PrivateRoute><GiftCards /></PrivateRoute>} />
          <Route path="/wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} />
          <Route path="/sell" element={<PrivateRoute><Sell /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
