import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
  //   دیتا هایی که درون سبد خرید میخوایم وجود داشته باشه
  selectedItems: [], //محصولاتی که کابر میخواد بخره
  itemsCounter: 0, //تعداد محصولاتی که کاربر انتخاب کرده
  total: 0, //مجموع قیمت محصولات انتخاب شده
  chechout: false, //پرداخت
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        chechout:false,
      }
    default:
      throw Error("INvalid Action");
  }
};
const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
