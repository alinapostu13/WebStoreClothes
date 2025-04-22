import React from "react";
import mainViewStyle from "../../Style/MainView.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";

function HomeButton() {
  return (
    <div className={mainViewStyle["home-section"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>Home</button>
    </div>
  );
}
export default HomeButton;
