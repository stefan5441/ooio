import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function NavigationProgress() {
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return null;
}
