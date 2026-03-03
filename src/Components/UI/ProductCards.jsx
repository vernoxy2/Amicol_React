import { useState } from "react";
import LazyImage from "./LazyImage";
import PrimaryBtn from "./PrimaryBtn";
import { IoCloseCircle } from "react-icons/io5";

export const ProductCards = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative duration-300 hover:scale-105">
        <LazyImage
          src={item.img}
          alt={item.title}
          className="h-full w-full rounded-lg bg-cover"
        />
        <div className="absolute inset-0 rounded-lg flex flex-col h-full justify-between">
          <h1 className="text-3xl h-[500px] font-extrabold mb-2 py-5 px-4 md:px-6 text-white md:w-[80%]">
            {item.title}
          </h1>

          <div className="relative px-4 md:px-4 py-2 md:pb-10 h-full bg-[#D9D9D9]/20 backdrop-blur rounded-b-lg space-y-1.5 md:space-y-3">
            <PrimaryBtn
              Btntext="View More"
              onClick={() => setIsOpen(true)}
              className=" absolute -top-16 right-4"
            />
            <p className="text-white">{item.text}</p>
            <hr className="w-[60%]" />
          </div>
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
              <h1>{""} <br />Use Application</h1>
              <p className="text-gray-700 mb-4">{item.application}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
