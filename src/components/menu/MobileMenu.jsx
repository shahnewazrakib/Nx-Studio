import { FaPhone } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";
function MobileMenu({ openMobileMenu, setOpenMobileMenu }) {
  const hideSidebar = function () {
    setOpenMobileMenu(false);
  };
  return (
    <menu
      className={`md:hidden flex flex-col text-dark gap-y-6 fixed bg-white top-0 transition-all duration-300 ${
        openMobileMenu ? "left-0" : "-left-full"
      }  z-50 w-screen h-screen p-8`}
    >
      <Link
        onClick={hideSidebar}
        offset={-100}
        className={styles.link}
        to="home"
        smooth={true}
      >
        Home
      </Link>
      <Link
        onClick={hideSidebar}
        offset={-100}
        className={styles.link}
        to="about"
        smooth={true}
      >
        About
      </Link>
      <Link
        onClick={hideSidebar}
        offset={-100}
        className={styles.link}
        to="services"
        smooth={true}
      >
        Services
      </Link>
      <Link
        onClick={hideSidebar}
        offset={-100}
        className={styles.link}
        to="review"
        smooth={true}
      >
        Reviews
      </Link>
      <Link
        onClick={hideSidebar}
        offset={-100}
        className={styles.link}
        to="contact"
        smooth={true}
      >
        Contact
      </Link>
      <a
        href="tel:+000000000"
        className="md:hidden bg-dark transition duration-300 hover:bg-violet text-sm rounded-md px-3 py-2 text-white flex items-center gap-x-3 w-max"
      >
        <span>Call Now</span>
        <FaPhone />
      </a>
      <LiaTimesSolid
        onClick={() => setOpenMobileMenu(false)}
        className="text-2xl absolute top-6 right-6"
      />
    </menu>
  );
}
const styles = {
  link: "cursor-pointer font-medium w-max",
};

export default MobileMenu;
