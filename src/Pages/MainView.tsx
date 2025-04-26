import mainViewStyle from "../Style/MainView.module.css";
import ContentSide from "../Components/Content";
import SearcBar from "../Components/SearchBar";
import FooterSide from "../Components/Footer";
import BackgroundVideo from "../Components/VideoBackground";
import NavigationBar from "../Components/NavigationBar";

function MainView() {
  return (
    <div className={mainViewStyle["container"]}>
      <BackgroundVideo />
      <NavigationBar />
      <SearcBar />
      <ContentSide />
      <FooterSide />
    </div>
  );
}

export default MainView;
