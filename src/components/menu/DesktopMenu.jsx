import { FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";
function DesktopMenu() {
  return (
    <>
      <menu className="md:flex hidden text-dark items-center gap-x-8 lg:gap-x-14">
        <Link className={styles.link} to="home" smooth={true} offset={-150}>
          Home
        </Link>
        <Link className={styles.link} to="about" smooth={true} offset={-150}>
          About
        </Link>
        <Link className={styles.link} to="services" smooth={true} offset={-150}>
          Services
        </Link>
        <Link className={styles.link} to="review" smooth={true} offset={-150}>
          Reviews
        </Link>
        <Link className={styles.link} to="contact" smooth={true} offset={-150}>
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
