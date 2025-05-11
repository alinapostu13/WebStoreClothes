import { useEffect, useRef, useState } from "react";
import layoutStyle from "../Style/Layout.module.css";
import FooterSide from "../Components/Footer";
import HomePageBackgroundVideo from "../Components/VideoBackgrounds/HomePageVideo";
import NavigationBar from "../Components/NavigationBar";
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
    <div className={layoutStyle["container"]}>
      <HomePageBackgroundVideo
        scrollTo={contentRef}
        topRef={topSectionRef}
        videoTitle="Presentation.mp4"
      />
      <NavigationBar />
      <FooterSide />
      {!isInView && <GoToTopButton contetRef={topSectionRef} />}
    </div>
  );
}

export default HomePage;
