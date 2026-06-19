import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ProductCategory from "./pages/productCategoryPage";
import DashboardPage from "./pages/dashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/products" element={<ProductCategory />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
