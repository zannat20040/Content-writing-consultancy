import React from "react";
import Heading from "../Shared Component/Heading";
import Subheading from "../Shared Component/Subheading";
import img1 from "../assets/Review/Ellipse 14.png";
import img2 from "../assets/Review/Ellipse 14 (1).png";
import img3 from "../assets/Review/Ellipse 14 (2).png";
import img4 from "../assets/Review/Ellipse 14 (3).png";
import img5 from "../assets/Review/Ellipse 14 (4).png";
import img6 from "../assets/Review/Ellipse 14 (5).png";
import img7 from "../assets/Review/Ellipse 14 (6).png";
import img8 from "../assets/Review/Ellipse 14 (7).png";
import { IoLogoTwitter } from "react-icons/io5";

const Review = () => {
  const allReviews = [
    {
      profile: img1,
      profileName: "Darrell Steward",
      userName: "@darrels",
      review:
        "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#another ",
    },
    {
      profile: img2,
      profileName: "Leslie Alexander",
      userName: "@lesslie",
      review:
        "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      hashtag: "#postcrafts ",
    },
    {
      profile: img3,
      profileName: "Jenny Wilson",
      userName: "@jennywilson",
      review:
        "This is a top quality product. No need to think twice before making it live on web.",
      hashtag: "#make_it_fast",
    },
    {
      profile: img4,
      profileName: "Kristin Watson",
      userName: "@kristinwatson2",
      review:
        "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months. ",
      hashtag: " #postcrafts",
    },
    {
      profile: img7,
      profileName: "Guy Hawkins",
      userName: "@jennywilson",
      review:
        "This is a top quality product. No need to think twice before making it live on web.",
      hashtag: "#make_it_fast",
    },
    {
      profile: img8,
      profileName: "Marvin McKinney",
      userName: "@jennywilson",
      review:
        "With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
      hashtag: "#dev #tools",
    },
    {
      profile: img6,
      profileName: "Annette Black",
      userName: "@jennywilson",
      review:
        "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#another",
    },
    {
      profile: img5,
      profileName: "Floyd Miles",
      userName: "@jennywilson",
      review:
        "@jennywilsonMy new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#postcrafts",
    },
  ];
  return (
    <div className="border-b border-[#252835]  pb-28">
      <div className="text-center mt-24 text-white max-w-xl  mx-auto">
        <Heading label={"What our customers say"} />
        <Subheading
          label={
            "Read why thousands of marketers, writers, and entrepreneurs love us so much."
          }
        />
      </div>

      <div className="grid grid-cols-4 gap-6 justify-between mt-28 font-inter">
        {allReviews.map((data, index) => (
          <div className="bg-white p-5 rounded-md h-fit " key={index}>
            <div className="flex justify-between gap-4">
              <div className="flex gap-3 mb-5">
                <img src={data.profile} alt=""/>
                <div>
                <h4 className="font-semibold">{data.profileName}</h4>
                <p className="text-sm text-gray-600">{data.userName}</p>
                </div>
              </div>
              <IoLogoTwitter className="text-[#0EA5E9]" />
            </div>
            <p className="">{data.review}</p>
            <span className="text-[#0EA5E9]">{data.hashtag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
