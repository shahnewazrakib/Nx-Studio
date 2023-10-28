import Men from "../images/men.jpg";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Reviews() {
  return (
    <section className="container">
      <h1 className="text-4xl text-center font-bold">What Our Clients Says</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={35}
        slidesPerView={3}
        pagination={{clickable: true}}
        className="pt-8 pb-12 px-3 mt-8"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-xl shadow-default p-8"
          >
            <div className="flex items-center gap-4">
              <picture>
                <img
                  src={Men}
                  alt="John Doe"
                  className="w-[60px] h-[60px] rounded-full object-cover"
                />
              </picture>
              <div className="space-y-1">
                <h2 className="font-semibold text-[1.3rem]">John Doe</h2>
                <div className="flex items-center gap-1 text-yellow text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            <p className="text-light leading-relaxed mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              nihil deserunt porro praesentium, provident similique! Voluptates,
              deleniti. Dolorem nam placeat magni eum nihil hic fugiat expli.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Reviews;
