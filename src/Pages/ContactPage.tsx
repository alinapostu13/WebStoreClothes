import FooterSide from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
const ContactPage = (): React.JSX.Element => {
  return (
    <div style={{ display: "flex" }}>
      <NavigationBar />
      <FooterSide />
    </div>
  );
};

export default ContactPage;
