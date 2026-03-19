import { useState } from "react";
import LazyImage from "./LazyImage";
import PrimaryBtn from "./PrimaryBtn";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate  } from "react-router-dom";

export const ProductCards = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
const handleContact = () => {
  navigate("/contact#contact-form");
};

  return (
    <>
      <div data-aos-delay="200" data-aos="fade-up" className="group overflow-hidden">
        <div className="relative ">
          <LazyImage
            src={item.img}
            alt={item.title}
            className="w-full bg-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-full overflow-hidden flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="relative overflow-hidden border border-primary text-white px-4 py-2 group/btn transform translate-y-10 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-500 ease-out delay-150"
              >
                <span className="relative z-10">View More</span>

                {/* Background fill */}
                <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover/btn:scale-x-100"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-y-4 flex-col h-full py-5 pb-8 px-4 md:px-6 bg-[#1E1E1E] group-hover:bg-primary transition-colors duration-500 ">
          <h1 className="text-3xl font-extrabold  text-white md:w-[80%]">
            {item.title}
          </h1>
          <p className="text-white">{item.text}</p>
          <hr className="w-[60%]" />
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 ">
          <div className="bg-white rounded-lg px-10 py-12 max-w-5xl w-10/12 relative flex ">
            <IoCloseCircle
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-3xl font-bold text-black hover:text-primary rounded-none cursor-pointer hover:scale-110 duration-200"
            />

            <div className="w-1/2 space-y-6">
              <h1>
                Product <br />
                Description
              </h1>
              {item.Description?.map((desc, index) => (
                <p key={index} className="text-gray-700">
                  {desc}
                </p>
              ))}
              {/* <PrimaryBtn Btntext="Close" onClick={() => setIsOpen(false)} /> */}
            </div>

            {/* Vertical Line */}
            <div className="w-[4px] bg-primary mx-8 self-stretch rounded-full"></div>

            <div className="w-1/2 space-y-6">
              <h1>
                {""} <br />
                Use Application
              </h1>
              <p className="text-gray-700 mb-4">{item.application}</p>
              <PrimaryBtn
                Btntext="Inquire Now"
                onClick={handleContact}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
