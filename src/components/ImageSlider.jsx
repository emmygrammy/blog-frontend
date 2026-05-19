import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import p1 from "../assets/phone/p1.jpeg";
import p2 from "../assets/phone/p2.jpeg";
import p3 from "../assets/phone/p3.jpeg";
import p4 from "../assets/phone/p4.jpeg";
import p5 from "../assets/phone/p5.jpeg";
import p6 from "../assets/phone/p6.jpeg";
import p7 from "../assets/phone/p7.jpeg";
import p8 from "../assets/phone/p8.jpeg";
import p9 from "../assets/phone/p9.jpeg";
import p10 from "../assets/phone/p10.jpeg";
import p11 from "../assets/phone/p11.jpeg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

export default function ImageSwiper() {
  return (
    <div className="w-full py-10 bg-surfaceHover">

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}

        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}

        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            
            {/* FULL IMAGE VIEW */}
            <div className="w-full flex justify-center items-center bg-white">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}