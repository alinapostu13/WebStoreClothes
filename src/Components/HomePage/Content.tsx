import style from "../../Style/Pages/HomePage.module.css";
import CustomSuiteSvg from "../../Images/customSuits.png";
import PresicionSvg from "../../Images/precision.png";
import PremiumFabricsSvg from "../../Images/premiumFabrics.png";
import { useNavigate } from "react-router-dom";

const Content = (): React.JSX.Element => {
  const navigate = useNavigate();
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
      <div className={style["our-story"]}>
        <h4 className={style["story"]}>
          In a world of fleeting fashion, we chose permanence. Founded in 2025,
          our atelier was born from a love for quiet craftsmanship and refined
          menswear.
          <br /> Each piece is made with intention—for men who value precision,
          character, and timeless design.
        </h4>
        <button
          onClick={() => {
            navigate("/about");
          }}
          className={style["button"]}
        >
          Read Our Story →
        </button>
      </div>
    </div>
  );
};

export default Content;
