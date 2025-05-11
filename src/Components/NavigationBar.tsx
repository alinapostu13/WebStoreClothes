import navigationStyle from "../Style/NavigationStyle.module.css";

import HomeButton from "./NavigationButtons/Home";
import AboutButton from "./NavigationButtons/About";
import ContactButton from "./NavigationButtons/Contact";
import ShoppingCart from "./NavigationButtons/ShoppingCart";
import Shop from "./NavigationButtons/Shop";

import SuitSvg from "../Images/Icons/suit-logo.svg";

type Props = {
  isShoppingCartVisible?: boolean;
};

function NavigationBar({ isShoppingCartVisible = false }: Props) {
  return (
    <div className={navigationStyle["navigation"]}>
      <div className={navigationStyle["navigationButtons"]}>
        <img
          src={SuitSvg}
          className={navigationStyle["logo"]}
          alt="No image found"
        />
        <HomeButton />
        <AboutButton />
        <Shop />
        <ContactButton />
        {isShoppingCartVisible && <ShoppingCart />}
      </div>
    </div>
  );
}

export default NavigationBar;
