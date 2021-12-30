import React, { useContext, useState, useEffect } from "react";
import styles from "./Header.module.css";

import mainImage from "../../assets/meals.jpg";
import HeaderCartIcon from "./HeaderCartIcon";
import CartContext from "../../context/cart-context";

const Header = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalCartAmount = cartCtx.items.reduce((prev, curr) => {
    return (curr = prev + curr.amount);
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <>
      <section className={styles.header}>
        <h1>ReactMeals</h1>

        <button className={btnStyles} onClick={props.onShowCart}>
          <span className={styles.icon}>
            <HeaderCartIcon />
          </span>
          <span>Your Cart</span>
          <span className={styles.badge}>{totalCartAmount}</span>
        </button>
      </section>

      <div className={styles["main-image"]}>
        <img src={mainImage} alt="Food Table" />
      </div>
    </>
  );
};

export default Header;
