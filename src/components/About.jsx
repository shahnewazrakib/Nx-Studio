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
      <h1 className="text-4xl text-center font-bold">Our Core Strength</h1>
      <p className="w-1/2 text-light leading-relaxed mx-auto text-center mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia
        consectetur voluptate mollitia quae, optio reiciendis ut porro veniam
        quo!
      </p>
      <div className="grid grid-cols-3 gap-8 mt-16">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className={`${card.card__color} rounded-lg p-8 relative`}
            >
              <div
                className={`absolute -top-5 w-[50px] h-[50px] ${card.icon__color} rounded-full text-white flex items-center justify-center text-2xl`}
              >
                {card.icon}
              </div>
              <h2 className="font-semibold text-xl mt-5">{card.title}</h2>
              <p className="text-light leading-relaxed mt-4">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-20">
        <picture className="w-[45%]">
          <img src={Banner} alt="Nx Studio" />
        </picture>
        <div className="w-[50%] space-y-5">
          <h1 className="text-4xl font-bold leading-snug">
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
          <button className="bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3">
            <span>Know More</span>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-16 -mb-16">
        {success.map((item, index) => {
          return (
            <div key={index} className="text-center">
              <h1 className="text-4xl text-center font-bold text-green">
                {item.completed}
              </h1>
              <p className="text-light leading-relaxed mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
