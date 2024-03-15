import React from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { decrementQuantity, incrementQuantity } from "../redux/action/Index";

const CartPage = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Cart Page</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <ul className="list-unstyled">
          {cartItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="fw-bold mb-2">Name: {item.title}</div>
                  <div className="mb-2">Price: ${item.price}</div>
                  <div className="d-flex align-items-center mb-2">
                    <button className="btn btn-sm btn-outline-dark me-2" onClick={() => handleDecrement(item.id)}>-</button>
                    <span className="me-2">Quantity: {item.qty}</span>
                    <button className="btn btn-sm btn-outline-dark" onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                  <div>Total: ${item.price * item.qty}</div>
                  <NavLink to={'/deliver'} className="btn btn-outline-dark mt-3" style={{ width: "100px" }}>Buy</NavLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.HandleCart,
  };
};

export default connect(mapStateToProps)(CartPage);
