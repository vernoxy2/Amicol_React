import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import Homepage from "./Pages/Homepage/Homepage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

// Product Pages
import AntiCorrosivePaint from "./Pages/ProductsPage/ProductsPageSections/Anti_Corrosive_Paint/AntiCorrosivePaint.jsx";
// import Polyurethane2K from "./Pages/ProductsPage/Polyurethane2K";
// import Polyurethane2KHB from "./Pages/ProductsPage/Polyurethane2KHB";
// import Epoxy2K from "./Pages/ProductsPage/Epoxy2K";
// import Epoxy2KHighBuild from "./Pages/ProductsPage/Epoxy2KHighBuild";
// import OtherPaints from "./Pages/ProductsPage/OtherPaints";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />

          {/* Products */}
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/products/anti-corrosive-paint"
            element={<AntiCorrosivePaint />}
          />

          {/* Polyurethane */}
          {/* <Route
            path="/products/polyurethane-paint/2k"
            element={<Polyurethane2K />}
          />
          <Route
            path="/products/polyurethane-paint/2k-hb"
            element={<Polyurethane2KHB />}
          /> */}

          {/* Epoxy */}
          {/* <Route
            path="/products/epoxy-paint/2k"
            element={<Epoxy2K />}
          />
          <Route
            path="/products/epoxy-paint/2k-high-build"
            element={<Epoxy2KHighBuild />}
          /> */}

          {/* Other */}
          {/* <Route
            path="/products/other-paints"
            element={<OtherPaints />}
          /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
