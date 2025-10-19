import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const AppRoutes = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint

    // Initial check
    setIsDesktop(mediaQuery.matches);

    // Listener for resizing
    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      {/* ✅ Only show on desktop */}
      {isDesktop && <CustomCursor />}

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
