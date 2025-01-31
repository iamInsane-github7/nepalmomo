import { createContext, useReducer } from "react";

export const cartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isExisting = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isExisting) {
        const newCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: newCartItems };
      } else {
        const newObject = { ...action.payload, quantity: 1 };
        const updatedProduct = [...state.cartItems, newObject];
        alert(`Add to cart ${newObject.name}`);
        return {
          ...state,
          cartItems: updatedProduct,
        };
      }
    }

    case "INCREMENT": {
      const newCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cartItems: newCartItems };
    }

    case "DECREMENT": {
      const newCartItems = state.cartItems
        .map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, cartItems: newCartItems };
    }

    case "REMOVE": {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case "CLEAR": {
      return { ...state, cartItems: [] };
    }

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
