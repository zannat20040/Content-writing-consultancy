import { Button } from "@material-tailwind/react";

const CTA = () => {
  return (
    <div className="container mt-36 mx-auto px-5">
      <div className="p-10 rounded-2xl bg-gradient-to-r text-white flex flex-wrap gap-5 justify-between items-center  to-[#E100FF] from-[#7F00FF]   ">
        <p className="text-4xl font-semibold  w-full md:w-2/4 font-outfit">
        We will enhance your writing and help present your ideas more clearly.        </p>
        <Button
          variant="text"
          className=" col-span-1 inline-block h-fit  capitalize font-inter  px-7 text-sm rounded-md font-normal bg-white hover:bg-white focus:!bg-white"
        >
          <span>Take our Growth Plan</span>
        </Button>
      </div>
    </div>
  );
};

export default CTA;
