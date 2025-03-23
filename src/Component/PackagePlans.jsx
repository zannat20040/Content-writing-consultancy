import Heading from "../Shared Component/Heading";
import Subheading from "../Shared Component/Subheading";
import { Button } from "@material-tailwind/react";

const PackagePlans = () => {
  const plans = [
    {
      type: "Starter Plan",
      price: "$29",
      desc: "Perfect for small businesses and startups looking to create a strong online presence.",
      features: [
        "5 Blog Posts/Month",
        "SEO-Optimized Content",
        "1 Social Media Post/Week",
        "Basic Analytics",
        "1 Month of Support",
      ],
    },

    {
      type: "Growth Plan",
      price: "$79",
      desc: "Ideal for growing businesses that need more content and strategy support.",
      features: [
        "15 Blog Posts/Month",
        "Advanced SEO-Optimized Content",
        "3 Social Media Posts/Week",
        "Keyword Research & Optimization",
        "1 Custom Landing Page",
        "3 Months of Support",
      ],
    },
    {
      type: "Premium Plan",
      price: "$149",
      desc: "Tailored for larger businesses requiring comprehensive content strategy and SEO.",
      features: [
        "30 Blog Posts/Month",
        "Full SEO-Optimized Content Strategy",
        "Daily Social Media Posts",
        "Custom Email Campaigns",
        "Advanced Analytics & Reporting",
        "Unlimited Support & Strategy Consultation",
      ],
    },
  ];
  return (
    <div className="container mx-auto px-5">
      <div className="text-center mt-24 text-white max-w-xl  mx-auto">
        <Heading label={"Make the wise decision for your business"} />
        <Subheading label={"Choose from our affordable 3 packages"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between mt-24 text-gray-500 font-inter ">
        {plans.map((data) => (
          <div
            key={data.type}
            className="p-10 bg-[#282A37] rounded-2xl flex flex-col justify-between gap-16 "
          >
            <div>
              <p>{data.type}</p>
              <p className=" mt-6 text-white">
                <span className="text-5xl ">{data.price}</span>/month
              </p>
              <p className="mt-3  mb-12">{data.desc}</p>
              <h5 className="text-white font-bold mb-6">What’s included:</h5>
              <ul className="flex flex-col gap-2">
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {data.price == "$79" ? (
              <Button
                variant="gradient"
                className="w-full inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r  to-[#E100FF] from-[#7F00FF]  hover:from-[#E100FF] hover:to-[#7F00FF] transition-all duration-700 ease-in-out focus:from-[#e661f8] focus:to-[#a351f6]"
              >
                <span>Get Started</span>
              </Button>
            ) : (
              <Button
                variant="text"
                className="inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D] w-full"
              >
                <span>Purchase Now</span>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePlans;
