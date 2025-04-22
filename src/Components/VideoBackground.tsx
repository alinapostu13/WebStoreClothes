import videoStyle from "../Style/BackgroundVideo.module.css";
import NavigationBar from "../Components/NavigationBar";

const BackgroundVideo = () => {
  return (
    <div className={videoStyle["videoContainer"]}>
      <video autoPlay muted loop className="background-video">
        <source src="Presentation.mp4" type="video/mp4" />
      </video>
      <NavigationBar />
    </div>
  );
};

export default BackgroundVideo;
