import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <div className={navigationStyle["homeButton"]}>
      <button
        className={buttonStyle["navigation-bar-buttons"]}
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
    </div>
  );
}
export default HomeButton;
