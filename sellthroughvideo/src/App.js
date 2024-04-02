import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome to our live streaming app! 🎥</h1>
        <p>Discover and explore amazing products in real-time! 🚀</p>
        <p>Join live sessions with sellers to get a closer look at their products and ask questions.</p>
        <div className="buttons">
          <Link to="/customer" className="button large-button">Join as Customer 🛒</Link>
          <Link to="/seller" className="button large-button">Go Live as Seller 📹</Link>
        </div>
      </div>
    </>
  );
}

export default App;
