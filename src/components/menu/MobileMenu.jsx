import { FaPhone } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
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
      <a onClick={hideSidebar} href="#home">Home</a>
      <a onClick={hideSidebar} href="#about">About</a>
      <a onClick={hideSidebar} href="#services">Services</a>
      <a onClick={hideSidebar} href="#reviews">Reviews</a>
      <a onClick={hideSidebar} href="#contact">Contact</a>
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
