import { Button } from "@material-tailwind/react";
import React from "react";

const CTA = () => {
  return (
    <div className="container mt-36 mx-auto px-5">
      <div className="p-10 rounded-2xl bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white flex flex-wrap gap-5 justify-between items-center ">
        <p className="text-4xl font-semibold  w-full md:w-2/4 font-outfit">
          It will help you improve your writing & bring ideas more clearly.
        </p>
        <Button
          variant="text"
          className=" col-span-1 inline-block h-fit  capitalize font-inter  px-7 text-sm rounded-md font-normal bg-white"
        >
          <span>Start 14 Days Free Trial</span>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
