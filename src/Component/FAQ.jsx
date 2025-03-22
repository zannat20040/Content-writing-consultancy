import React from "react";
import Heading from "../Shared Component/Heading";
import ButtonLayout from "../Shared Component/ButtonLayout";
import { Button } from "@material-tailwind/react";
import img from "../assets/Feature/Image 1.png";
import AboutImageLayout from "../Shared Component/AboutImageLayout";

const FAQ = () => {
  return (
    <div className=" pt-20 pb-52 border-b border-[#252835]">
      <div className="container mx-auto px-5">

      <div className="max-w-lg mx-auto text-white ">
        <Heading label={"Mixland helps you build beautiful website"} />
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between ">
        <ul className="flex gap-2 flex-col col-span-1">
          <li>
            <Button
              variant="gradient"
              className="w-full inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]  hover:from-[#5C7FFF] hover:to-[#CB5CFF] transition-all duration-700 ease-in-out focus:from-[#0035F5] focus:to-[#A600F5]"
            >
              <span>Blog Headlines</span>
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              className="inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D] w-full"
            >
              <span>Blog Intros</span>
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              className="inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D]  w-full"
            >
              <span>Content Rewriter</span>
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              className="inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D]  w-full"
            >
              <span>Facebook Ads</span>
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              className="inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D]  w-full"
            >
              <span>Product Description</span>
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              className="inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D]  w-full"
            >
              <span>PAS Copywriting Formula</span>
            </Button>
          </li>
        </ul>

        <div className="md:col-span-2 lg:col-span-3">
          <AboutImageLayout
            img={img}
            color="rgba(159, 54, 242, 0.1)"
            direction="0 20px 100px"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
