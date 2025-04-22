import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";

function HomeButton() {
  return (
    <div className={navigationStyle["homeButton"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>Home</button>
    </div>
  );
}
export default HomeButton;
