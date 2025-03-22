/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const ButtonLayout = ({ label }) => {
  return (
    <Button
      variant="gradient"
      className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r from-[#c33764] to-[#1d2671]  hover:to-[#c33764] hover:from-[#1d2671] transition-all duration-700 ease-in-out focus:from-[#ea5785] focus:to-[#3a46ba]"
    >
      <span>{label}</span>
    </Button>
  );
};

export default ButtonLayout;
