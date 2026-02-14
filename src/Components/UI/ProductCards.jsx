import LazyImage from "./LazyImage";

export const ProductCards = ({ item }) => {
  return (
    <div className="relative duration-300 hover:scale-105">
      <LazyImage
        src={item.img}
        alt={item.title}
        className=" w-full rounded-lg bg-cover"
      />
      <div className="absolute inset-0 bg-black/10 rounded-lg flex flex-col h-full justify-between">
        <h1 className="text-3xl font-extrabold mb-2 py-5 px-4 md:px-6 text-white  md:w-[80%]">
          {item.title}
        </h1>
        <div className=" px-4 md:px-7 py-5 md:pb-10 bg-black/50 backdrop-blur rounded-b-lg space-y-1.5 md:space-y-3">
          <p className="text-white">{item.text}</p>
          <hr className="w-[60%]"/>
        </div>
      </div>
    </div>
  );
}
