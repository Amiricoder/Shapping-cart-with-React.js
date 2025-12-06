import React, { createContext, useReducer } from "react";

const initialState = {};
const reducer = () => {};
const cartContext = createContext();

function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <cartContext.Provider value={state}>{children}</cartContext.Provider>;
}

export default CartProvider;
