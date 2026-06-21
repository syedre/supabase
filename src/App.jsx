import React, { lazy, Suspense } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "./components/ui/spinner";

const LandingPage = lazy(() => import("./pages/landingPage"));
const ProductCategory = lazy(() => import("./pages/productCategoryPage"));
const DashboardPage = lazy(() => import("./pages/dashboardPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/products" element={<ProductCategory />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
