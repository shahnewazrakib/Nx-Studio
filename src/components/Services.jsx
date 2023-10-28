import {
  FaArrowRight,
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
    <section className="container flex items-center gap-16">
      <div className="flex-1 space-y-5">
        <h1 className="text-4xl font-bold leading-snug">
          What Services We Offer ?
        </h1>
        <p className="text-light leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          praesentium facere alias consectetur repellat nulla voluptate tempore
          quis velit odio, suscipit eligendi omnis nesciunt quas, quidem
        </p>
        <button className="bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3">
          <span>Know More</span>
          <FaArrowRight />
        </button>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-8 mt-16">
        {services.map((service, index) => {
          return (
            <div key={index} className="bg-white cursor-pointer transition duration-300 rounded-xl p-7 shadow-default border-b-[5px] border-transparent hover:border-violet">
              <div
                className={`w-[50px] h-[50px] ${service.icon__class} rounded-full flex items-center justify-center text-2xl`}
              >
                {service.icon}
              </div>
              <h2 className="font-semibold text-[1.3rem] mt-5">{service.title}</h2>
              <p className="text-light leading-relaxed mt-4">
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
