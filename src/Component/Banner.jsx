import { Typography } from "@material-tailwind/react";
import ButtonLayout from "../Shared Component/ButtonLayout";
import { LuMousePointerClick } from "react-icons/lu";

const Banner = () => {
  return (
    <div className=" pb-20 pt-11 border-b border-[#252835]">
      <div className="container mx-auto px-5">
        <div
          style={{ filter: "drop-shadow(rgba(159, 54, 242,1 ) 0px 0px 100px)" }}
          className="pb-0 w-fit mx-auto"
        >
          <Typography
            variant="h2"
            color="blue-gray"
            className=" text-FAFAFA text-center font-outfit text-5xl sm:text-6xl font-medium leading-[66px] mb-10 w-fit mx-auto"
          >
            Write better <br />
            content for your <br />{" "}
            <span className="text-gradient relative text-gradient-color text-4xl sm:text-5xl">
              Brands or Business{" "}
              <span className="absolute bottom-0 h-1 left-0 w-full text-gradient-color"></span>
            </span>
          </Typography>
          <Typography
            color="gray"
            className="font-normal text-FAFAFA font-inter text-center max-w-md mx-auto mb-12"
          >
            Our expert content writing services help you create high-quality
            blogs, social media posts, website copy, and more, tailored to
            engage your audience and boost your brand.
          </Typography>
        </div>

        <div className="w-fit mx-auto flex flex-col justify-center">
          <ButtonLayout label={"Let's Connect"} />
          <button className="relative flex items-center gap-3 mt-3 justify-center p-3 rounded text-white overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-[#2B59FF] hover:to-[#BB2BFF] hover:text-transparent hover:bg-clip-text hover:text-gradient hover:border-gradient hover:text-gradient-color">
            <span className="absolute inset-0 border-2 rounded border-transparent group-hover:border-gradient w-full h-full top-0 left-0"></span>
            <LuMousePointerClick className="transition-all duration-300 group-hover:text-gradient group-hover:text-gradient-color" />
            <span className="transition-all duration-300 group-hover:text-gradient group-hover:text-gradient-color">
              See our Work
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
