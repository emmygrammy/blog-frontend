import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function VideoSlider() {
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
          <p className="text-gray-600">
            Learn from expert curated YouTube lessons
          </p>
        </div>

        {/* slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                
                {/* video */}
                <iframe
                  className="w-full h-56"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>

                {/* title */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {video.title}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default VideoSlider;