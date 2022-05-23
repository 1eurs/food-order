import React, { Fragment } from "react";
import mealsimg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButoon from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButoon />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimg} alt="pic" />
      </div>
    </Fragment>
  );
}

export default Header;
