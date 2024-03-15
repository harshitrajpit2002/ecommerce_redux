// Initialize cart from local storage or fall back to an empty array if not available
const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

const HandleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "AddITEM":
      // check if product already exist
      const exist = state.find((x) => x.id === product.id);
      let newState;
      if (exist) {
        newState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        newState = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      // Save to local storage
      localStorage.setItem('cartItems', JSON.stringify(newState));
      return newState;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1) {
        newState = exist1.qty === 1
          ? state.filter((x) => x.id !== exist1.id)
          : state.map((x) =>
              x.id === product.id ? { ...x, qty: x.qty - 1 } : x
            );
      }
      
      // Save to local storage
      localStorage.setItem('cartItems', JSON.stringify(newState));
      return newState;
      case "INCREMENT_QUANTITY":
        return state.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        );
      
      case "DECREMENT_QUANTITY":
        return state.map(item =>
          item.id === action.payload ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
        );

// In your cart reducer
case "CLEAR_CART":
    return []; // Or your initial state, if it's not an empty array
    
    default:
      return state;
  }
};
export default HandleCart;