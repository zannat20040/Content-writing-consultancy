import React from "react";
import Heading from "../Shared Component/Heading";
import Subheading from "../Shared Component/Subheading";
import { Button } from "@material-tailwind/react";

const PackagePlans = () => {
  const plans = [
    {
      type: "Starter Plan",
      price: "$29",
      desc: "This package is suitable for teams 1-15 people.",
      features: [
        "10 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "1 Year Support",
      ],
    },

    {
      type: "Basic Plan",
      price: "$79",
      desc: "This package is suitable for teams 1-50 people.",
      features: [
        "15 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "5 Year Support",
        "Free Custom Domain",
        "Basic Statistics",
      ],
    },
    {
      type: "Premium Plan",
      price: "$129",
      desc: "This package is suitable for teams 1-100 people.",
      features: [
        "20 GB Dedicated Hosting Free",
        "Best for Developers,  Freelancers",
        "Unlimited Support",
        "Free Custom Domain",
        "Full Statistics",
      ],
    },
  ];
  return (
    <div>
      <div className="text-center mt-24 text-white max-w-xl  mx-auto">
        <Heading label={"Make the wise decision for your business"} />
        <Subheading label={"Choose from our affordable 3 packages"} />
      </div>

      <div className="grid grid-cols-3 gap-10 justify-between mt-24 text-gray-500 font-inter ">
        {plans.map((data, index) => (
          <div className="p-10 bg-[#282A37] rounded-2xl flex flex-col justify-between gap-16 ">
            <div>
            <p>{data.type}</p>
            <p className=" mt-6 text-white">
              <span className="text-5xl ">{data.price}</span>/month
            </p>
            <p className="mt-3  mb-12">{data.desc}</p>
            <h5 className="text-white font-bold mb-6">What’s included:</h5>
            <ul className="flex flex-col gap-2">
              {data.features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
            </div>

      
            {data.price == "$79" ? (
              <Button
                variant="gradient"
                className="w-full hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]  hover:from-[#5C7FFF] hover:to-[#CB5CFF] transition-all duration-700 ease-in-out focus:from-[#0035F5] focus:to-[#A600F5]"
              >
                <span>Blog Headlines</span>
              </Button>
            ) : (
              <Button
                variant="text"
                className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D] w-full"
              >
                <span>Blog Intros</span>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePlans;
