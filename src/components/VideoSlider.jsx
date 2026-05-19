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
    <section className="py-16 px-6 bg-surfaceHover">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-800">
            Watch Video Lessons
          </h2>
          <p className="text-gray-600 mt-2">
            Learn from expert curated YouTube lessons
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          // 🔥 IMPORTANT FIX HERE
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4, // ✅ 4 videos on desktop
            },
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
                  className="w-full h-48"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                />

                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {video.title}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-8">

          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition"
          >
            <FaLessThan size={14} />
          </button>

          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition"
          >
            <FaGreaterThan size={14} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default VideoSlider;