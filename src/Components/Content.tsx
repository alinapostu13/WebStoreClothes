import homePageStyle from "../Style/HomePage.module.css";
import contentStyle from "../Style/Content.module.css";
import { ContentData } from "../Interfaces/WebStore";
import JSonData from "../Data/Clothes.json";
import TShirt from "./TShirt";
import { forwardRef } from "react";

const ContentSide = forwardRef<HTMLDivElement>((_, ref) => {
  const data: ContentData[] = JSonData;
  return (
    <div ref={ref} className={homePageStyle["content-section"]}>
      <div className={contentStyle.container}>
        {data.map((test, index) => (
          <TShirt key={index} data={test} />
        ))}
      </div>
    </div>
  );
});

export default ContentSide;
