import React, { useContext } from "react";
import styles from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const orderingHandler = () => {
    console.log("Ordering...");
  };

  const cartMealRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartMealAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartMealRemoveHandler.bind(null, item.id)}
            onAdd={cartMealAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={orderingHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
