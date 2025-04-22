import React from "react";
import mainViewStyle from "../../Style/MainView.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";

function ContactButton() {
  return (
    <div className={mainViewStyle["contact-section"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>Contact</button>
    </div>
  );
}
export default ContactButton;
