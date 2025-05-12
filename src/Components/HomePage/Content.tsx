import style from "../../Style/Pages/HomePage.module.css";
import CustomSuiteSvg from "../../Images/customSuits.png";
import PresicionSvg from "../../Images/precision.png";
import PremiumFabricsSvg from "../../Images/premiumFabrics.png";

const Content = (): React.JSX.Element => {
  return (
    <div className={style["content-container"]}>
      <div className={style["what-we-do"]}>
        <div className={style["image-container"]}>
          <img src={CustomSuiteSvg} />
          <p className={style["hover-text"]}>Custom suits</p>
        </div>

        <div className={style["image-container"]}>
          <img src={PresicionSvg} />
          <p className={style["hover-text"]}>Precision</p>
        </div>

        <div className={style["image-container"]}>
          <img src={PremiumFabricsSvg} />
          <p className={style["hover-text"]}>Premium fabrics</p>
        </div>
      </div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  );
};

export default Content;
