import Logo from "../images/logo.png";
import { Link } from "react-scroll";
import { FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });
  return (
    <header
      className={`${sticky ? "shadow-default" : "shadow-none"} sticky top-0 bg-white z-[500]`}
    >
      <nav className="container flex items-center justify-between py-3">
        <picture>
          <img className="w-[70px]" src={Logo} alt="Nx Studio" />
        </picture>
        <menu className="text-dark flex items-center gap-x-14">
          <Link className={styles.link} to="#home" smooth={true}>
            Home
          </Link>
          <Link className={styles.link} to="#about" smooth={true}>
            About
          </Link>
          <Link className={styles.link} to="#services" smooth={true}>
            Services
          </Link>
          <Link className={styles.link} to="#review" smooth={true}>
            Reviews
          </Link>
          <Link className={styles.link} to="#home" smooth={true}>
            Contact
          </Link>
        </menu>
        <a
          href="tel:+000000000"
          className="bg-dark transition duration-300 hover:bg-violet text-sm rounded-md px-3 py-2 text-white flex items-center gap-x-3"
        >
          <span>Call Now</span>
          <FaPhone />
        </a>
      </nav>
    </header>
  );
}

const styles = {
  link: "cursor-pointer font-medium",
};

export default Header;
