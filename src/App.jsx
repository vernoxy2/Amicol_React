import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import Homepage from "./Pages/Homepage/Homepage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
// import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
