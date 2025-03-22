import React from "react";
import AboutLayout from "../Shared Component/AboutLayout";
import AboutImageLayout from "../Shared Component/AboutImageLayout";
import img1 from "../assets/about/Card 1.png";
import img2 from "../assets/about/image.png";

const About = () => {
  return (
    <div className="container mx-auto px-5 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center ">
        <AboutImageLayout
          img={img2}
          color="rgba(159, 54, 242, 0.3)"
          direction="60px 0 100px"
        />
        <AboutLayout
          h1TagOpeninng={
            "Create content efficiently and quickly with great AI writing tools"
          }
          pTagopening={
            "150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-12 mt-6 justify-center items-center">
        <div className="ml-0 md:ml-14">
          <AboutLayout
            h1TagOpeninng={
              "Write what you want to convey through clear, & authentic writing"
            }
            pTagopening={
              "150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
            }
          />
        </div>
        <AboutImageLayout
          img={img1}
          color="rgba(54, 107, 242, 0.3)"
          direction="-54px 0 100px"
        />
      </div>
    </div>
  );
};

export default About;
