import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ setOpenNavbar }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenNavbar(false)
  }, [pathname]);

  return null;
}
export default ScrollToTop