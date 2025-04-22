import React from "react";
import { ContentData } from "../Interfaces/WebStore";
import clothingStyle from "../Style/ClothingStyle.module.css";

type Props = {
  data: ContentData;
};

const TShirt = ({ data }: Props): React.JSX.Element => {
  return (
    <div className={clothingStyle.container}>
      <div className={clothingStyle.productInformation}>{data.Name}</div>

      <img
        src={data.Image}
        alt="No image found "
        style={{ width: "10rem", margin: "1rem" }}
      />

      <div className={clothingStyle.productInformation}>{data.Price}$</div>

      <div className={clothingStyle.productInformation}>
        {data.Size.map((size, index) => (
          <button
            key={index}
            style={{
              background: "transparent",
              borderRadius: "10px",
              margin: "2px",
            }}
          >
            {size}
          </button>
        ))}
      </div>
      <button className={clothingStyle.addToCart} style={{}}>
        Add to cart
      </button>
    </div>
  );
};
export default TShirt;
