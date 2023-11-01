import { FaPhone } from "react-icons/fa";
function DesktopMenu() {
  return (
    <>
      <menu className="md:flex hidden text-dark items-center gap-x-8 lg:gap-x-14">
        <a className={styles.link} href="#home">
          Home
        </a>
        <a className={styles.link} href="#about">
          About
        </a>
        <a className={styles.link} href="#services">
          Services
        </a>
        <a className={styles.link} href="#reviews">
          Reviews
        </a>
        <a className={styles.link} href="#contact">
          Contact
        </a>
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
