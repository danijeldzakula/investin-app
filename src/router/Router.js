import React, { useLayoutEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

export default function Router() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (window.history.action === "POP") {
      window.addEventListener("unload", (e) => {
        return window.scrollTo(0, 0);
      });
    }
    if (window.history.scrollRestoration) {
      if (window.history.scrollRestoration === "auto") {
        window.history.scrollRestoration = "manual";
      }
      window.addEventListener("unload", () => {
        return window.scrollTo(0, 0);
      });
    }

    return () => {
      return window.scrollTo(0, 0);
    };
  }, [location]);

  return (
    <div className="app">
      <Routes>
        {/* Place for render routing system (pages) */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>Not Found Error</h1>} />
      </Routes>
    </div>
  );
}
