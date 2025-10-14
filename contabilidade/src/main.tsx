import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./pages/componets/Header/index.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import Contato from "./pages/Contact/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";
import Contact from "./pages/Contact/index.tsx";
import Footer from "./pages/componets/Footer/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
