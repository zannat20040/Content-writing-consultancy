import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import ButtonLayout from "../Shared Component/ButtonLayout";
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" pb-20  border-b border-[#252835]">
      <div
        style={{ filter: "drop-shadow(rgba(159, 54, 242,0.8 ) 0px 0px 100px)" }}
        className="p-28 pb-0 w-fit mx-auto"
      >
        <Typography
          variant="h2"
          color="blue-gray"
          className=" text-FAFAFA text-center font-outfit text-6xl font-medium leading-[66px] mb-10 w-fit mx-auto"
        >
          Write better <br />
          content for your <br />{" "}
          <span className="text-gradient relative text-gradient-color">
            Facebook Ads{" "}
            <span className="absolute bottom-0 h-1 left-0 w-full text-gradient-color"></span>
          </span>
        </Typography>
        <Typography
          color="gray"
          className="font-normal text-FAFAFA font-inter text-center max-w-md mx-auto mb-12"
        >
          Artificial intelligence writting tool helps you create blogs, social
          media websites and much more.
        </Typography>
      </div>

      <div className="w-fit mx-auto flex flex-col justify-center">
        <ButtonLayout label={"Start 14 Days Free Trial"} />
        <button className="relative flex items-center gap-3 mt-3 justify-center p-3 rounded text-white overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-[#2B59FF] hover:to-[#BB2BFF] hover:text-transparent hover:bg-clip-text hover:text-gradient hover:border-gradient hover:text-gradient-color">
          <span className="absolute inset-0 border-2 rounded border-transparent group-hover:border-gradient w-full h-full top-0 left-0"></span>
          <FaRegCirclePlay className="transition-all duration-300 group-hover:text-gradient group-hover:text-gradient-color" />
          <span className="transition-all duration-300 group-hover:text-gradient group-hover:text-gradient-color">
            Watch A Demo
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
