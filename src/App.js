import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Router from "./router";

const MyApp = () => {
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

  return <Router />;
};

export default MyApp;
