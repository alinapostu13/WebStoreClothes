import videoStyle from "../../Style/BackgroundVideo.module.css";

const AboutPageVideo = () => {
  return (
    <div className={videoStyle["videoContainer"]}>
      <video autoPlay muted loop className="background-video">
        <source src="About.mp4" type="video/mp4" />
      </video>
      <div className={videoStyle["content"]}>
        <h1 className={videoStyle["webSiteName"]}>Our story</h1>
        <p className={videoStyle["motto"]}>Élan Noire</p>
      </div>
    </div>
  );
};

export default AboutPageVideo;
