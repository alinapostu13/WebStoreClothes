import React, { useState } from "react";
import mainViewStyle from "../Style/MainView.module.css";
import NavigationBar from "../Components/NavigationBar";
import ContentSide from "../Components/Content";
import SearcBar from "../Components/SearchBar";
import FooterSide from "../Components/Footer";

function MainView() {
  return (
    <div className={mainViewStyle["container"]}>
      <NavigationBar />
      <SearcBar />
      <ContentSide />
      <FooterSide />
    </div>
  );
}

export default MainView;
