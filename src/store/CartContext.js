import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (currentItem) => {},
  removeItem: (item_ID) => {},
});

export default CartContext;
