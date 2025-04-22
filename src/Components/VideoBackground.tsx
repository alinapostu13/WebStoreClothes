import videoStyle from "../Style/BackgroundVideo.module.css";
import NavigationBar from "../Components/NavigationBar";

const BackgroundVideo = () => {
  return (
    <div className={videoStyle["videoContainer"]}>
      <video autoPlay muted loop className="background-video">
        <source src="Presentation.mp4" type="video/mp4" />
      </video>
      <NavigationBar />
      <div className={videoStyle["content"]}>
        <h1 className={videoStyle["webSiteName"]}>Élan Noire</h1>
        <p className={videoStyle["motto"]}>Born from moonlight and memory.</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
