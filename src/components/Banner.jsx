import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegCirclePlay } from "react-icons/fa6";
import 'animate.css';


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
        className="h-[500px] rounded-b-md container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[500px] w-full flex flex-col justify-end items-center text-gray-300 text-start bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/avtar-banner.jpg')`,
            }}
          >
            <a href="https://www.youtube.com/"  target="_blank"><div className="flex justify-center items-center gap-3 lg:gap-5 py-5" >
                <div>
                <FaRegCirclePlay className="text-7xl lg:text-9xl text-[#ff4545] hover:text-white animate__flash animate__animated animate__repeat-3" />
                </div>
           <div className="">
           <h1 className=" text-2xl lg:text-4xl font-bold animate__animated animate__slideInDown">
           Avatar: The Way of Water

            </h1>
            <p className="text-xl py-2 animate__slideInUp animate__animated">
             View Trailer
            </p>
           
           </div>
            </div>
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-end items-center text-gray-300 text-start bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner-2.jpg')`,
            }}
          >
           <a href="https://www.youtube.com/"  target="_blank"><div className="flex justify-center items-center gap-3 lg:gap-5 py-5" >
                <div>
                <FaRegCirclePlay className="text-7xl lg:text-9xl text-[#ff4545] hover:text-white animate__flash animate__animated animate__repeat-3" />
                </div>
           <div className="">
           <h1 className=" text-2xl lg:text-4xl font-bold animate__animated animate__slideInDown">
           Interstellar
            </h1>
            <p className="text-xl py-2 animate__slideInUp animate__animated">
             View Trailer
            </p>
           
           </div>
            </div>
            </a>
          </div>
        </SwiperSlide>
         {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-end items-center text-gray-300 text-start bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/endgame-banner.jpg')`,
            }}
          >
            
           <a href="https://www.youtube.com/"  target="_blank"> <div className="flex justify-center items-center gap-3 lg:gap-5 py-5" >
                <div>
                <FaRegCirclePlay className="text-7xl lg:text-9xl text-[#ff4545] hover:text-white animate__flash animate__animated animate__repeat-3" />
                </div>
           <div className="">
           <h1 className=" text-2xl lg:text-4xl font-bold animate__animated animate__slideInDown">
           Avengers: Endgame
            </h1>
            <p className="text-xl py-2 animate__slideInUp animate__animated">
             View Trailer
            </p>
           </div>
            </div>
            </a>
          </div>
        </SwiperSlide> {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-end items-center text-gray-300 text-start bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/justice-banner.jpg')`,

            }}
          >
           <a href="https://www.youtube.com/"  target="_blank"><div className="flex justify-center items-center gap-3 lg:gap-5 py-5" >
                <div>
                <FaRegCirclePlay className="text-7xl lg:text-9xl text-[#ff4545] hover:text-white animate__flash animate__animated animate__repeat-3" />
                </div>
           <div className="">
           <h1 className="text-2xl lg:text-4xl font-bold animate__animated animate__slideInDown">
           Justice League
            </h1>
            <p className="text-xl py-2 animate__slideInUp animate__animated">
             View Trailer
            </p>
           </div>
            </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;