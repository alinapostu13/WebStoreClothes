import mainViewStyle from "../Style/MainView.module.css";
import ContentSide from "../Components/Content";
import SearcBar from "../Components/SearchBar";
import FooterSide from "../Components/Footer";
import BackgroundVideo from "../Components/VideoBackground";
import NavigationBar from "../Components/NavigationBar";
import { useEffect, useRef, useState } from "react";
import GoToTopButton from "../Components/GoToTopButton";

function HomePage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const checkInView = () => {
    const ref = topSectionRef.current;
    if (!ref) return;

    const rect = topSectionRef.current?.getBoundingClientRect();
    setIsInView(rect!.top < window.innerHeight && rect!.bottom > 0);
  };

  useEffect(() => {
    checkInView();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);
    return () => {
      document.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  });

  return (
    <div className={mainViewStyle["container"]}>
      <BackgroundVideo scrollTo={contentRef} topRef={topSectionRef} />
      <NavigationBar />
      <SearcBar />
      <ContentSide ref={contentRef} />
      <FooterSide />
      {!isInView && <GoToTopButton contetRef={topSectionRef} />}
    </div>
  );
}

export default HomePage;
