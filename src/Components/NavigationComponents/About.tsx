import mainViewStyle from "../../Style/MainView.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";

function AboutButton() {
  return (
    <div className={mainViewStyle["about-section"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>About</button>
    </div>
  );
}
export default AboutButton;
