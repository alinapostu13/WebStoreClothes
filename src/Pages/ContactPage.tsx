import FooterSide from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import layoutStyle from "../Style/Layout.module.css";
const ContactPage = (): React.JSX.Element => {
  return (
    <div className={layoutStyle["container"]}>
      <NavigationBar />
      <FooterSide />
    </div>
  );
};

export default ContactPage;
