import { AiOutlineAreaChart, AiFillHeart } from "react-icons/ai";
import { FaTools, FaArrowRight } from "react-icons/fa";
import Banner from "../images/about-us.webp";

function About() {
  const cards = [
    {
      icon: <AiOutlineAreaChart />,
      title: "Effective Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id cum eveniet corporis, qui impedit!",
      icon__color: "bg-yellow",
      card__color: "bg-yellow/10",
    },
    {
      icon: <FaTools />,
      title: "Powerful Tools",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id cum eveniet corporis, qui impedit!",
      icon__color: "bg-green",
      card__color: "bg-green/10",
    },
    {
      icon: <AiFillHeart />,
      title: "Great Experience",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id cum eveniet corporis, qui impedit!",
      icon__color: "bg-pink",
      card__color: "bg-pink/10",
    },
  ];

  const success = [
    { completed: "200+", description: "Happy Clients" },
    { completed: "2.5M", description: "Targeted Audience" },
    { completed: "50+", description: "Ongoing Project" },
    { completed: "800+", description: "Completed Project" },
  ];

  return (
    <section className="container">
      <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold">
        Our Core Strength
      </h1>
      <p className="lg:w-1/2 text-light leading-relaxed mx-auto text-center mt-2 sm:mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia
        consectetur voluptate mollitia quae, optio reiciendis ut porro veniam
        quo!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-8 sm:mt-12 md:mt-16">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className={`${card.card__color} rounded-lg p-6 md:p-8 relative`}
            >
              <div
                className={`absolute top-4 md:-top-5 md:right-auto right-4 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] opacity-30 md:opacity-100 ${card.icon__color} rounded-full text-white flex items-center justify-center text-2xl`}
              >
                {card.icon}
              </div>
              <h2 className="font-semibold text-[18px] sm:text-xl md:mt-5">
                {card.title}
              </h2>
              <p className="text-light leading-relaxed mt-4">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-8 sm:mt-14 md:mt-20">
        <picture className="w-[45%] lg:block hidden">
          <img src={Banner} alt="Nx Studio" />
        </picture>
        <div className="lg:w-[50%] space-y-3 sm:space-y-5 lg:text-left text-center">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-snug">
            Crafting Digital Success <br /> Stories - Nx Studio.
          </h1>
          <p className="text-light leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            praesentium facere alias consectetur repellat nulla voluptate
            tempore quis velit odio, suscipit eligendi omnis nesciunt quas,
            quidem, blanditiis ullam?
          </p>
          <p className="text-light leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            repellat ratione maiores quisquam accusamus laborum eligendi.
          </p>
          <a
            href="#services"
            className="bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3 lg:mx-0 mx-auto w-max sm:cursor-pointer"
          >
            <span>Know More</span>
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div
        id="services"
        className="grid grid-cols-2 sm:grid-cols-4 mt-16 sm:mb-0 mb-12 2xl:-mb-16 sm:gap-0 gap-y-4"
      >
        {success.map((item, index) => {
          return (
            <div key={index} className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-green">
                {item.completed}
              </h1>
              <p className="sm:text-base text-[15px] text-light leading-relaxed sm:mt-2">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
