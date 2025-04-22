import React from "react";
import mainViewStyle from "../Style/MainView.module.css";
import searchBarStyle from "../Style/SeacrhBar.module.css";

function SearcBar() {
  return (
    <div className={mainViewStyle["search-bar"]}>
      <button>Categories</button>
      <button>Products</button>
      <input type="search" placeholder="Search..." />
    </div>
  );
}

export default SearcBar;
