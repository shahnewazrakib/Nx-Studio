import { Link } from "react-scroll";
import Banner from "../images/hero-banner.png";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="container relative lg:-top-0 -top-4 flex items-center justify-between gap-x-10">
      <div className="space-y-6 md:text-left text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-snug 2xl:leading-snug">
          We’re A <span className="text-violet">Digital Marketing Agency </span>{" "}
          Helps To Grow Business
        </h1>
        <p className="md:w-[80%] text-light leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat
          ratione maiores quisquam accusamus laborum eligendi ipsam atque, dicta
          voluptatibus.
        </p>
        <div className="flex items-center gap-4 md:justify-start justify-center">
          <Link to="services" smooth={true} offset={-120} className="bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3 sm:cursor-pointer">
            <span>Our Services</span>
            <FaArrowRight />
          </Link>

          <Link to="about" smooth={true} offset={-120} className="bg-white border border-gray text-sm font-medium rounded-md px-3 py-[10px] text-dark shadow-sm sm:cursor-pointer">
            About Us
          </Link>
        </div>
      </div>
      <picture className="md:block hidden">
        <img src={Banner} alt="Nx Studio" />
      </picture>
    </section>
  );
}

export default Hero;
