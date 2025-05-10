import navigationStyle from "../Style/NavigationStyle.module.css";
import HomeButton from "./NavigationComponents/Home";
import AboutButton from "./NavigationComponents/About";
import ContactButton from "./NavigationComponents/Contact";
import ShoppingCart from "./NavigationComponents/ShoppingCart";
import SuitSvg from "../Images/Icons/suit-logo.svg";
function NavigationBar() {
  return (
    <div className={navigationStyle["navigation"]}>
      <div className={navigationStyle["navigationButtons"]}>
        <img src={SuitSvg} className={navigationStyle["logo"]} />
        <HomeButton />
        <AboutButton />
        <ContactButton />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default NavigationBar;
