import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/navbarMobile";

export default function Navbar() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 767)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener('resize', handleResize)
}, []);

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />
}
