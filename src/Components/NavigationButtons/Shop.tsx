import { useNavigate } from "react-router-dom";
import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";
const Shop = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className={navigationStyle["homeButton"]}>
      <button
        className={buttonStyle["navigation-bar-buttons"]}
        onClick={() => {
          navigate("/shop");
        }}
      >
        Shop
      </button>
    </div>
  );
};

export default Shop;
