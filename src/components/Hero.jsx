import Banner from '../images/hero-banner.png';
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="container flex items-center justify-between gap-x-10">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-snug">
          We’re A <span className="text-violet">Digital Marketing Agency </span>{" "}
          Helps To Grow Business
        </h1>
        <p className="w-[80%] text-light leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat
          ratione maiores quisquam accusamus laborum eligendi ipsam atque, dicta
          voluptatibus.
        </p>
        <div className='flex items-center gap-4'>
          <button className="bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3">
            <span>Our Services</span>
            <FaArrowRight />
          </button>

          <button className="bg-white border border-gray text-sm font-medium rounded-md px-3 py-[10px] text-dark shadow-sm">
            About Us
          </button>
        </div>
      </div>
      <picture>
        <img src={Banner} alt="Nx Studio" />
      </picture>
    </section>
  );
}

export default Hero