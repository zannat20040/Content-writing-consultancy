/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonLayout = ({ label }) => {
  return (
    <Button
      variant="gradient"
      className=" text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r to-[#E100FF] from-[#7F00FF]  hover:from-[#E100FF] hover:to-[#7F00FF] transition-all duration-700 ease-in-out focus:from-[#e661f8] focus:to-[#a351f6]"
    >
      <span>{label}</span>
    </Button>
  );
};

export default ButtonLayout;
