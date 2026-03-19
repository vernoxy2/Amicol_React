import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Logo from "/Logoo.svg";
import LazyImage from "./Components/UI/LazyImage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Lazy load pages
const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage/AboutUsPage"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage/ContactUsPage"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage/ProductsPage"));

// Product Pages
const AntiCorrosivePaint = lazy(
  () =>
    import("./Pages/ProductsPage/ProductsPageSections/AntiCorrosivePaint/AntiCorrosivePaint.jsx"),
);
const Polyurethane = lazy(
  () =>
    import("./Pages/ProductsPage/ProductsPageSections/PolyurethanePaint/Polyurethane.jsx"),
);
const Epoxy = lazy(
  () =>
    import("./Pages/ProductsPage/ProductsPageSections/EpoxyPaint/Epoxy.jsx"),
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      // once: true, // animation runs only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        {/* ✅ Suspense wrapper */}
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">
              <LazyImage
                src={Logo}
                alt=""
                loading="lazy"
                className="animate-pulse lg:h-24"
              />
              <p className="text-primary font-semibold">Loading...</p>
            </div>
          }
        >
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

            <Route
              path="/products/polyurethane-paint"
              element={<Polyurethane />}
            />

            <Route path="/products/epoxy-paint" element={<Epoxy />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
