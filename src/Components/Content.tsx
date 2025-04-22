import mainViewStyle from "../Style/MainView.module.css";
import contentStyle from "../Style/Content.module.css";
import { ContentData } from "../Interfaces/WebStore";
import JSonData from "../Data/Clothes.json";
import TShirt from "./TShirt";

function ContentSide() {
  const data: ContentData[] = JSonData;
  return (
    <div className={mainViewStyle["content-section"]}>
      <div className={contentStyle.container}>
        {data.map((test, index) => (
          <TShirt key={index} data={test} />
        ))}
      </div>
    </div>
  );
}

export default ContentSide;
