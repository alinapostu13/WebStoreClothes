import React from "react";
import mainViewStyle from "../Style/MainView.module.css";
import searchBarStyle from "../Style/SeacrhBar.module.css";

function SearcBar() {
  return (
    <div className={mainViewStyle["search-bar"]}>
      <button style={{ flexGrow: "1" }}>Categories</button>
      <button style={{ flexGrow: "1" }}>Products</button>
      <input
        type="search"
        placeholder="🔍 Search..."
        style={{ flexGrow: "5" }}
      />
    </div>
  );
}

export default SearcBar;
