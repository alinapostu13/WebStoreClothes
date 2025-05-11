import contentStyle from "../Style/Content.module.css";
import layoutStyle from "../Style/Layout.module.css";

import { ContentData } from "../Interfaces/WebStore";
import JSonData from "../Data/Clothes.json";
import Product from "../Components/Product";
import NavigationBar from "../Components/NavigationBar";
import FooterSide from "../Components/Footer";

const ProductsPage = (): React.JSX.Element => {
  const data: ContentData[] = JSonData;
  return (
    <div className={layoutStyle["container"]}>
      <NavigationBar isShoppingCartVisible={true} />
      <div className={contentStyle.container}>
        {data.map((test, index) => (
          <Product key={index} data={test} />
        ))}
      </div>
      <FooterSide />
    </div>
  );
};

export default ProductsPage;
