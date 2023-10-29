import { FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";
function DesktopMenu() {
  return (
    <>
      <menu className="md:flex hidden text-dark items-center gap-x-8 lg:gap-x-14">
        <Link className={styles.link} to="home" smooth={true} offset={-150} spy={true}>
          Home
        </Link>
        <Link className={styles.link} to="about" smooth={true} offset={-150} spy={true}>
          About
        </Link>
        <Link className={styles.link} to="services" smooth={true} offset={-150} spy={true}>
          Services
        </Link>
        <Link className={styles.link} to="review" smooth={true} offset={-150} spy={true}>
          Reviews
        </Link>
        <Link className={styles.link} to="contact" smooth={true} offset={-150} spy={true}>
          Contact
        </Link>
      </menu>
      <a
        href="tel:+000000000"
        className="md:flex hidden bg-dark transition duration-300 hover:bg-violet text-sm rounded-md px-3 py-2 text-white items-center gap-x-3"
      >
        <span>Call Now</span>
        <FaPhone />
      </a>
    </>
  );
}
const styles = {
  link: "cursor-pointer font-medium",
};

export default DesktopMenu;
