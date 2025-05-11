import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";
import { useNavigate } from "react-router-dom";

function AboutButton() {
  const navigate = useNavigate();
  return (
    <div className={navigationStyle["aboutButton"]}>
      <button
        className={buttonStyle["navigation-bar-buttons"]}
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
    </div>
  );
}
export default AboutButton;
