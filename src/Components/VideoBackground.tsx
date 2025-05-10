import videoStyle from "../Style/BackgroundVideo.module.css";

type BackgroundVideoProps = {
  scrollTo: React.RefObject<HTMLDivElement | null>;
  topRef: React.RefObject<HTMLDivElement | null>;
};

const BackgroundVideo = ({ scrollTo, topRef }: BackgroundVideoProps) => {
  const onClickHandle = () => {
    scrollTo.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={videoStyle["videoContainer"]} ref={topRef}>
      <video autoPlay muted loop className="background-video">
        <source src="Presentation.mp4" type="video/mp4" />
      </video>
      <div className={videoStyle["content"]}>
        <h1 className={videoStyle["webSiteName"]}>Élan Noire</h1>
        <p className={videoStyle["motto"]}>Born from moonlight and memory.</p>
        <button className={videoStyle["scroll-more"]} onClick={onClickHandle}>
          Discover more
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
