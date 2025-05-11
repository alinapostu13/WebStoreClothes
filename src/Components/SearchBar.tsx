import React from "react";
import homePageStyle from "../Style/Pages/HomePage.module.css";
function SearcBar() {
  return (
    <div className={homePageStyle["search-bar"]}>
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
