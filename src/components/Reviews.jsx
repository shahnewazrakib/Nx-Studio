import Men from "../images/men.jpg";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Reviews() {
  return (
    <section id="review" className="container">
      <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold">
        What Our Clients Says
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={35}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
        }}
        className="pt-8 pb-12 px-3 md:mt-8"
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
                  className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full object-cover"
                />
              </picture>
              <div className="space-y-1">
                <h2 className="font-semibold text-base sm:text-[18px] md:text-[1.3rem]">John Doe</h2>
                <div className="flex items-center gap-1 text-yellow text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            <p className="text-light leading-relaxed mt-4 lg:mt-6 md:text-base text-[15px]">
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
