import navigationStyle from "../Style/NavigationStyle.module.css";
import HomeButton from "./NavigationComponents/Home";
import AboutButton from "./NavigationComponents/About";
import ContactButton from "./NavigationComponents/Contact";
import ShoppingCart from "./NavigationComponents/ShoppingCart";

function NavigationBar() {
  return (
    <div className={navigationStyle["navigation"]}>
      <div className={navigationStyle["navigationButtons"]}>
        <HomeButton />
        <AboutButton />
        <ContactButton />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default NavigationBar;
