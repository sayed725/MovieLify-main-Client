import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Banner = () => {
  return (
    <div className="relative w-full bg-cover bg-center rounded-md">
      <Swiper
        modules={[Navigation, Pagination , Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          speed={1000}
        className="h-[500px] rounded-b-md"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[500px] w-full flex flex-col justify-center items-center text-gray-300 text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner-1.png')`,
            }}
          >
            <h1 className="animate__animated animate__slideInDown text-4xl md:text-6xl font-bold mb-4">
              Explore Majestic Forests
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block  animate__slideInUp animate__animated">
              Venture deep into lush, pristine forests, uncovering their secrets
              and beauty while ensuring environmental sustainability.
            </p>
            <a href="#1234" className="bg-[#ff4545] hover:text-black  font-semibold px-6 py-3 rounded-md ">
              Explore Now
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-center items-center text-gray-300 text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner-2.jpg')`,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__slideInDown ">
              Discover Hidden Paradises
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block  animate__slideInUp animate__animated">
              Immerse yourself in the beauty of untouched nature and connect
              with the wild in the most sustainable way.
            </p>
            <a href="#1234" className="bg-[#ff4545] hover:text-black  font-semibold px-6 py-3 rounded-md">
              Explore Now
            </a>
          </div>
        </SwiperSlide>
         {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-center items-center text-gray-300 text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner-3.jpg')`,
            }}
          >
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__slideInDown">
            Discover the Heart of the Jungle
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block  animate__slideInUp animate__animated">
            Dive into the vibrant wilderness of lush jungles, teeming with life and secrets, while championing efforts to protect their fragile ecosystems.
            </p>
            <a href="#1234" className="bg-[#ff4545] hover:text-black  font-semibold px-6 py-3 rounded-md">
              Explore Now
            </a>
          </div>
        </SwiperSlide> {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-center items-center text-gray-300 text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner-4.png')`,

            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__slideInDown">
            Wander Through Enchanted Woods
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block animate__slideInUp animate__animated">
            Step into ancient forests filled with towering trees, hidden wildlife, and the serene whispers of nature, preserving these wonders for generations to come.
            </p>
            <a href="#1234" className="bg-[#ff4545] hover:text-black  font-semibold px-6 py-3 rounded-md">
              Explore Now
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;