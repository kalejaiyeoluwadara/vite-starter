import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
function Navbar() {
  const amount = useSelector((state) => state.cart.amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;