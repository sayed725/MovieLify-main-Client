import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {

    const handleSubmit = ()=>{
        e.preventDefault()
    }


  return (
   <div className="py-[50px]">
     
     <div className="flex flex-col md:flex-row gap-10 items-center justify-center p-6 sm:px-[100px] lg:px-[200px]">
      {/* Left Section */}
      <div className="w-full flex flex-col gap-5">
      <h2 className="text-4xl font-bold mb-4">GET IN TOUCH</h2>
        <p className="text-gray-600 mb-6">
        We’d love to hear from you! Whether you have a question or just want to <br />
        get in touch, feel free to drop us a message.
        </p>
        <div className="space-y-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 text-xl mr-4" />
            <div>
              <h3 className="font-bold">ADDRESS</h3>
              <p>Movielify, Gulshan 2/10, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-red-500 text-xl mr-4" />
            <div>
              <h3 className="font-bold">PHONE</h3>
              <p>(123) 456 - 7890</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-red-500 text-xl mr-4" />
            <div>
              <h3 className="font-bold">EMAIL</h3>
              <p>ssayed725332@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full">
        <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border-b border-gray-300 rounded-none col-span-2 focus:outline-none focus:border-black"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-2 border-b border-gray-300 rounded-none col-span-2 focus:outline-none focus:border-black"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 text-white btn rounded-lg hover:bg-red-600 transition col-span-2 hover:text-black"
          >
            SEND YOUR MESSAGE
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Contact;
