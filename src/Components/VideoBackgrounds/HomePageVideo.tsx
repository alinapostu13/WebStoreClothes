import videoStyle from "../../Style/BackgroundVideo.module.css";

type HomePageBackgroundVideoProps = {
  scrollTo: React.RefObject<HTMLDivElement | null>;
  topRef: React.RefObject<HTMLDivElement | null>;
};

const HomePageBackgroundVideo = ({
  scrollTo,
  topRef,
}: HomePageBackgroundVideoProps) => {
  const onClickHandle = () => {
    scrollTo.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={videoStyle["videoContainer"]} ref={topRef}>
      <video autoPlay muted loop className="background-video">
        <source src="HomePageVideo.mp4" type="video/mp4" />
      </video>
      <div className={videoStyle["content"]}>
        <h1 className={videoStyle["webSiteName"]}>Élan Noire</h1>
        <p className={videoStyle["motto"]}>Born from moonlight and memory.</p>
        <p className={videoStyle["city"]}>Iasi,Romania</p>
        <button className={videoStyle["scroll-more"]} onClick={onClickHandle}>
          Discover more
        </button>
      </div>
    </div>
  );
};

export default HomePageBackgroundVideo;
