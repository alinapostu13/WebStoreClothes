import navigationStyle from "../../Style/NavigationStyle.module.css";
import buttonStyle from "../../Style/ButtonsStyle.module.css";
import Logo from "../../Images/Shopping-Cart.svg";

function ShoppingCart() {
  return (
    <div className={navigationStyle["shoppingCartButton"]}>
      <button className={buttonStyle["navigation-bar-buttons"]}>
        <img style={{ width: "30px" }} src={Logo} alt="No image found" />
      </button>
    </div>
  );
}
export default ShoppingCart;
