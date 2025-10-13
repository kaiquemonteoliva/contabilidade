import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./pages/componets/Header/index.tsx";
import HomePage from "./pages/HomePage/index.tsx";
import Contato from "./pages/Contato/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
