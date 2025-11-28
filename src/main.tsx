import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./pages/componets/Header/index.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import AboutUs from "./pages/AboutUs/index.tsx";
import Contact from "./pages/Contact/index.tsx";
import Footer from "./pages/componets/Footer/index.tsx";
import Service from "./pages/Service/index.tsx";
import Admin from "./pages/Admin/index.tsx";

const adminPath = import.meta.env.VITE_ADMIN_ROUTE || "/admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Service" element={<Service />} />
        <Route path={adminPath} element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
