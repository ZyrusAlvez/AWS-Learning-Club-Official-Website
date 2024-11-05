import { FaArrowRight } from "react-icons/fa";

const Arrow_Right = ({ onClick }) => {
  return (
    <div
      className="w-11 h-11 border-2 border-pink rounded-full flex justify-center items-center cursor-pointer hover:bg-pink group"
      onClick={onClick}
    >
      <FaArrowRight className="text-pink group-hover:text-white text-base" />
    </div>
  );
};

export default Arrow_Right;
