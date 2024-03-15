import React, { useContext } from "react";
import { global } from "../Context/Context1";

const AddtoCart = () => {
  const spanStyle = {
    display: "block",
    marginBottom: "10px",
  };
  const { data, setdata } = useContext(global);

  const increaseQuantity = () => {
    // Update the quantity by increasing it by 1
    setdata(data + 1);
  };
  const decreasingQuantity = () => {
    // Update the quantity by increasing it by 1
    setdata(data - 1);
  };

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={increaseQuantity}>
        +
      </button>
      <span style={spanStyle}>Quantity:{data}</span>
      <button className="btn btn-outline-dark" onClick={decreasingQuantity}>
        -
      </button>
    </div>
  );
};

export default AddtoCart;
