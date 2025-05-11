import NavigationBar from "../Components/NavigationBar";
import FooterSide from "../Components/Footer";
import AboutPageVideo from "../Components/VideoBackgrounds/AboutPageVideo";

import layoutStyle from "../Style/Layout.module.css";
import AboutContent from "../Components/AboutContent";

function AboutPage() {
  return (
    <div className={layoutStyle["container"]}>
      <AboutPageVideo />
      <NavigationBar />
      <AboutContent />
      <FooterSide />
    </div>
  );
}

export default AboutPage;
