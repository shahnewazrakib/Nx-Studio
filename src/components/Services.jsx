import {
  FaPhone,
  FaRegChartBar,
  FaEnvelopeOpenText,
  FaFacebook,
} from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";

function Services() {
  const services = [
    {
      icon: <FaRegChartBar />,
      title: "Content Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugit.",
      icon__class: "text-yellow bg-yellow/10",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Email Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugit.",
      icon__class: "text-violet bg-violet/10",
    },
    {
      icon: <AiFillMedicineBox />,
      title: "Business Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugit.",
      icon__class: "text-green bg-green/10",
    },
    {
      icon: <FaFacebook />,
      title: "SSM Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugit.",
      icon__class: "text-pink bg-pink/10",
    },
  ];
  return (
    <section
      id="services"
      className="container flex 2xl:flex-row flex-col items-center gap-16"
    >
      <div className="flex-1 space-y-3 sm:space-y-5 2xl:text-left text-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-snug">
          What Services We Offer ?
        </h1>
        <p className="text-light leading-relaxed 2xl:w-auto w-full lg:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          praesentium facere alias consectetur repellat nulla voluptate tempore
          quis velit odio, suscipit eligendi omnis nesciunt quas, quidem
        </p>
        <a
          href="tel:+000000000"
          className="transition duration-300 bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-x-3 w-max 2xl:mx-0 mx-auto"
        >
          <span>Call Now</span>
          <FaPhone />
        </a>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 2xl:mt-16">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="bg-white cursor-pointer transition duration-300 rounded-xl p-5 sm:p-7 shadow-default border-b-[5px] border-transparent hover:border-violet"
            >
              <div
                className={`w-[50px] h-[50px] ${service.icon__class} rounded-full flex items-center justify-center text-2xl`}
              >
                {service.icon}
              </div>
              <h2 className="font-semibold text-base md:text-[1.3rem] mt-4 sm:mt-5">
                {service.title}
              </h2>
              <p className="text-light leading-relaxed mt-3 sm:mt-4">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
