import April from "./April.jsx";

const Events = () => {
  return (
    <div id="events" className="mx-4 mt-20 flex items-stretch gap-4 scroll-mt-16 sm:flex-col-reverse sm:mx-8">
      <div className="text-white justify-around hidden font-bold -mt-2 sm:flex">
        <h1>April 2024</h1>
        <h1 className="ml-9">July 2024</h1>
        <h1>December 2024</h1>
        <h1 className="mr-1">February 2025</h1>
        <h1 className="mr-1">March 2025</h1>
      </div>
      
      <div className="flex flex-col items-center sm:flex-row">
        <div className="bg-white h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="w-3 h-3 rounded-full bg-pink my-1 cursor-pointer sm:mx-2"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="w-3 h-3 rounded-full bg-pink my-1 cursor-pointer sm:mx-2"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="w-3 h-3 rounded-full bg-pink my-1 cursor-pointer sm:mx-2"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="w-3 h-3 rounded-full bg-pink my-1 cursor-pointer sm:mx-2"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
        <div className="w-3 h-3 rounded-full bg-pink my-1 cursor-pointer sm:mx-2"></div>
        <div className="bg-brand h-[9%] w-[3px] sm:w-[9%] sm:h-[5px]"></div>
      </div>

      <April />
    </div>
  );
};

export default Events;