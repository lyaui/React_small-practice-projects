import React, { createContext, useContext, useReducer } from 'react';

const cartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (Item) => {},
  removeItem: (id) => {},
});

const DEFAULT_STATE = { items: [], totalAmount: 0 };

const cartReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIdx = state.items.findIndex((item) => item.id === action.item.id);
    let updatedItems = [...state.items];
    // 如果物品已在購物車中
    if (existingCartItemIdx !== -1) {
      const existingCartItem = state.items[existingCartItemIdx];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems[existingCartItemIdx] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIdx = state.items.findIndex((item) => item.id === action.id);
    const updatedItem = state.items[existingCartItemIdx];
    let updatedItems = [...state.items];
    if (updatedItem.amount > 1) {
      updatedItems[existingCartItemIdx] = { ...updatedItem, amount: updatedItem.amount - 1 };
    } else {
      updatedItems.splice(existingCartItemIdx, 1);
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - +updatedItem.price,
    };
  }

  return state;
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, DEFAULT_STATE);
  const addItem = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };
  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };
  return <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>;
};

export const useCartValue = () => useContext(cartContext);
