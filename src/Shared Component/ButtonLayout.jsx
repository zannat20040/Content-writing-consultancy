import React from "react";
import { Button  } from "@material-tailwind/react";

const ButtonLayout = ({label}) => {
  return (
    <Button
      variant="gradient"
      className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]  hover:from-[#5C7FFF] hover:to-[#CB5CFF] transition-all duration-700 ease-in-out focus:from-[#0035F5] focus:to-[#A600F5]"
    >
      <span>{label}</span>
    </Button>
  );
};

export default ButtonLayout;
