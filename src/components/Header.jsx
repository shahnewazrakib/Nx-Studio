import Logo from "../images/logo.png";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import DesktopMenu from "./menu/DesktopMenu";
import MobileMenu from "./menu/MobileMenu";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileMenu]);
  return (
    <header
      className={`${
        sticky ? "shadow-default" : "shadow-none"
      } sticky top-0 bg-white z-[500]`}
    >
      <nav className="container flex items-center justify-between py-2 sm:py-3">
        <picture>
          <img className="w-[50px] md:w-[70px]" src={Logo} alt="Nx Studio" />
        </picture>
        <DesktopMenu />
        <GrMenu
          onClick={() => setOpenMobileMenu(true)}
          className="md:hidden block text-2xl text-dark"
        />
      </nav>
      <MobileMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
    </header>
  );
}

const styles = {
  link: "cursor-pointer font-medium",
};

export default Header;
