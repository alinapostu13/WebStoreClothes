import React from "react";
import NavigationBar from "../Components/NavigationBar";
import FooterSide from "../Components/Footer";
import AboutPageVideo from "../Components/VideoBackgrounds/AboutPageVideo";

import aboutpageStyle from "../Style/AboutPage.module.css";
import AboutContent from "../Components/AboutContent";

function AboutPage() {
  return (
    <div className={aboutpageStyle["container"]}>
      <AboutPageVideo />
      <NavigationBar />
      <AboutContent />
      <FooterSide />
    </div>
  );
}

export default AboutPage;
