import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";

function AboutButton() {
  return (
    <div className={navigationStyle["aboutButton"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>About</button>
    </div>
  );
}
export default AboutButton;
