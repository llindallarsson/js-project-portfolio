import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StartPage } from "./pages/StartPage";
import { AboutPage } from "./pages/AboutPage";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
