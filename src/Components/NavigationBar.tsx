import React from "react";
import navigationStyle from "../Style/NavigationStyle.module.css";
import HomeButton from "./NavigationComponents/Home";
import AboutButton from "./NavigationComponents/About";
import ContactButton from "./NavigationComponents/Contact";
import ShoppingCart from "./NavigationComponents/ShoppingCart";
function NavigationBar() {
  return (
    <div className={navigationStyle["navigation"]}>
      <h1 className={navigationStyle["webSiteName"]}>Snappy Threads</h1>
      <HomeButton />
      <AboutButton />
      <ContactButton />
      <ShoppingCart />
    </div>
  );
}

export default NavigationBar;
