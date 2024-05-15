import React from "react";
import icon from "../assets/Feature/image 318.png";
import icon1 from "../assets/Feature/image 319.png";
import icon2 from "../assets/Feature/image 320.png";
import icon3 from "../assets/Feature/image 321.svg";
import Heading from "../Shared Component/Heading";
import Subheading from "../Shared Component/Subheading";

const Feature = () => {
  const allFeatures = [
    {
      icon: icon,
      title: "Blog Headlines",
      desc: "Write a better blog title with our A.I tool.",
    },
    {
      icon: icon1,
      title: "Blog Intros",
      desc: "Generate a paragraph of blog content using Blog Intros tool",
    },

    {
      icon: icon2,
      title: "Blog Outline",
      desc: "Need an attention-grabbing headline for your article?",
    },
    {
      icon: icon,
      title: "Blog Conclusions",
      desc: "Write a better conclusions with AI writing tool.",
    },
    {
      icon: icon3,
      title: "Content Rewriter",
      desc: "Get AI writer to rewrite your sentence in a different way.",
    },
    {
      icon: icon1,
      title: "Product Description",
      desc: "Need an attention-grabbing headline for your article?",
    },
    {
      icon: icon2,
      title: "PAS Copywriting Formula",
      desc: "Get AI writer to rewrite your sentence in a different way.",
    },
    {
      icon: icon,
      title: "Company About Us",
      desc: "Write a better blog title with our AI tool.",
    },
  ];

  console.log(allFeatures);

  return (
    <div className="px-4">
      <div className="text-center mt-24 text-white max-w-lg mx-auto">
        <Heading label={"54 exciting writing tools"} />
        <Subheading
          label={
            "AI engines take information from various sources and read them like a human would do."
          }
        />
      </div>

      <div className="grid grid-cols-4 gap-10 my-20">
        {allFeatures.map((data, index) => (
          <div
            className="flex gap-4 justify-between font-inter bg-[#282A37] p-6 rounded-xl text-white"
            key={index}
          >
            <img src={data.icon} alt="" className="w-8 h-8" />
            <div>
              <h1>{data.title}</h1>
              <p className="text-sm text-gray-500 mt-2">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center  font-inter border-b border-[#252835] pb-28 text-white ">
        See all 54 available tools
      </p>
    </div>
  );
};

export default Feature;
