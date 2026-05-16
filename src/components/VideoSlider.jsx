import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

function VideoSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [
    {
      title: "Introduction to Biology",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Math Basics",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      
    title: "Physics Fundamentals",
    url: "https://www.youtube.com/embed/_c6SA4B7uf8",
  },
    
    {
      title: "Chemistry Essentials",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "English Grammar",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Computer Basics",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Watch Video Lessons
          </h2>
          <p className="text-gray-600 mt-2">
            Learn from expert curated YouTube lessons
          </p>
        </div>

        {/* slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                
                <iframe
                  className="w-full h-56"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                />

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {video.title}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="flex justify-center items-center gap-6 mt-8">

          <button
            ref={prevRef}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition"
          >
            <FaLessThan size={18} />
          </button>

          <button
            ref={nextRef}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition"
          >
            <FaGreaterThan size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default VideoSlider;