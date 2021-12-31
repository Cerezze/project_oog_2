import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";

export default function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    props.refProp.current.scrollTop = 0;
  }, [pathname]);

  return null;
}