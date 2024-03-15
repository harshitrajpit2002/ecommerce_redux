//add item to cart

export const  addcart = (product) => {
  return {
      type : "AddITEM",
    payload : product

  }
}
//delete item from cart
export const  delcart = (product) => {
  return {
      type : "DELITEM",
    payload : product

  }
}

export const clearCart = () => {
  return {
      type: "CLEAR_CART",
  };
};
export const incrementQuantity = (id) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: id
  };
};

export const decrementQuantity = (id) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: id
  };
};