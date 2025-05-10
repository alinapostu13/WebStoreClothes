import mainViewStyle from "../Style/MainView.module.css";
import ContentSide from "../Components/Content";
import SearcBar from "../Components/SearchBar";
import FooterSide from "../Components/Footer";
import BackgroundVideo from "../Components/VideoBackground";
import NavigationBar from "../Components/NavigationBar";
import { useRef } from "react";

function MainView() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <div className={mainViewStyle["container"]}>
      <BackgroundVideo scrollTo={targetRef} />
      <NavigationBar />
      <SearcBar />
      <ContentSide ref={targetRef} />
      <FooterSide />
    </div>
  );
}

export default MainView;
