import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/1.jpg",
    title: "Building Future Leaders",
    subtitle:
      "World-class secondary education focused on excellence and innovation.",
  },

  {
    image: "/images/2.jpg",
    title: "A Modern Learning Environment",
    subtitle:
      "Equipping students with skills for the future through modern education.",
  },

  {
    image: "/images/3.jpg",
    title: "Academic Excellence & Discipline",
    subtitle:
      "Nurturing creativity, leadership, discipline, and academic success.",
  },
];

function HeroSlider() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              {/* BACKGROUND IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white animate-fadeIn">
                    <p className="uppercase tracking-[6px] text-blue-300 mb-4">
                      Welcome To Maduka University College
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a href="/academics">
                        <button className="bg-[#062E70] hover:cursor-pointer hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300">
                          Explore School
                        </button>
                      </a>

                      <a href="/admissions">
                        <button className="border border-white hover:bg-white hover:cursor-pointer hover:text-black text-white px-8 py-4 rounded-2xl font-semibold transition duration-300">
                          Admissions
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM STYLES */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #2563eb;
          opacity: 1;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease;
        }
      `}</style>
    </section>
  );
}

export default HeroSlider;
