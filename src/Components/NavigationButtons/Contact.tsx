import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";
import { useNavigate } from "react-router-dom";

function ContactButton() {
  const navigate = useNavigate();
  return (
    <div className={navigationStyle["contactButton"]}>
      <button
        className={buttonStyle["navigation-bar-buttons"]}
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact
      </button>
    </div>
  );
}
export default ContactButton;
