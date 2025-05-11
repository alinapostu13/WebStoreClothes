import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
