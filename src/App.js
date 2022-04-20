import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stors data, think of state
// reducer - function that used to update the store

import { createStore } from 'redux';

import reducer from "./reducer";
// dsipatch methods - send actions to the store
// actions (objects) = MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on immutability (copy) 

// react-redux - Provider - wraps app - , connect - used in components
import { Provider } from "react-redux";

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
}
// reducer


const store = createStore(reducer, initialStore);
// console.log(store)
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
