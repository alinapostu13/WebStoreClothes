import React from "react";
import mainViewStyle from "../Style/MainView.module.css";
import HomeButton from "./NavigationComponents/Home";
import AboutButton from "./NavigationComponents/About";
import ContactButton from "./NavigationComponents/Contact";
import ShoppingCart from "./NavigationComponents/ShoppingCart";
function NavigationBar() {
  return (
    <div className={mainViewStyle["container"]}>
      <h1 className={mainViewStyle["web-name"]}>Snappy Threads</h1>
      <HomeButton />
      <AboutButton />
      <ContactButton />
      <ShoppingCart />
    </div>
  );
}

export default NavigationBar;
