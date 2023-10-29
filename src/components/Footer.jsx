import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="bg-dark text-center space-y-4 py-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-white">
          Nx Studio.
        </h1>
        <p className="w-[95%] md:w-1/2 2xl:w-1/3 mx-auto text-gray leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quo
          quae nobis sint dolores laboriosam rerum aliquam doloribus qui
          sapiente.
        </p>
        <div className="flex items-center gap-4 justify-center">
          <div className={styles.icon}>
            <FaFacebookF size={15} />
          </div>
          <div className={styles.icon}>
            <FaXTwitter size={14} />
          </div>
          <div className={styles.icon}>
            <FaLinkedinIn />
          </div>
          <div className={styles.icon}>
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="bg-footer__dark py-3 text-gray/80 text-sm">
        <div className="container flex items-center sm:flex-row flex-col justify-between sm:gap-0 gap-2 text-center">
          <p>Copyright © {new Date().getFullYear()} reserved by Nx Studio.</p>
          <div className="flex items-center gap-x-6">
            <Link to="home" smooth={true}>
              Terms & Services
            </Link>
            <Link to="home" smooth={true}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  icon: "flex items-center justify-center w-[30px] h-[30px] rounded-full bg-light text-gray transition duration-300 hover:bg-green hover:text-white cursor-pointer",
};

export default Footer;
