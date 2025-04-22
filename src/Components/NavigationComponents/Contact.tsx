import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";

function ContactButton() {
  return (
    <div className={navigationStyle["contactButton"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>Contact</button>
    </div>
  );
}
export default ContactButton;
