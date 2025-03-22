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
      profile: img1, // Replace with the actual image path
      profileName: "John Doe",
      userName: "@johnwrites",
      review:
        "The content I received was top-notch! It helped boost my site’s SEO and improve user engagement. Highly recommend!",
      hashtag: "#SEO #contentwriting",
    },
    {
      profile: img2, // Replace with the actual image path
      profileName: "Alice Smith",
      userName: "@alicesmith",
      review:
        "Amazing service! The blog posts were insightful and well-researched. I've seen a significant increase in traffic since publishing.",
      hashtag: "#blogging #contentmarketing",
    },
    {
      profile: img3, // Replace with the actual image path
      profileName: "Robert Brown",
      userName: "@robertbrown",
      review:
        "Their website copy is fantastic! It perfectly matches my brand voice and helped us convert more visitors into customers.",
      hashtag: "#websitecopy #digitalmarketing",
    },
    {
      profile: img4, // Replace with the actual image path
      profileName: "Linda White",
      userName: "@lindawrites",
      review:
        "Postcrafts delivered exactly what I needed. Their team created a seamless content strategy that resonated with my audience.",
      hashtag: "#contentstrategy #brandvoice",
    },
    {
      profile: img7, // Replace with the actual image path
      profileName: "David Johnson",
      userName: "@davidjohnson",
      review:
        "I was struggling with content creation for my e-commerce site, but Postcrafts made it easy with their professional product descriptions.",
      hashtag: "#ecommerce #productdescriptions",
    },
    {
      profile: img8, // Replace with the actual image path
      profileName: "Sophia Lee",
      userName: "@sophialeewrites",
      review:
        "The social media content created by Postcrafts has been a game-changer. Engaging posts that resonate with my followers!",
      hashtag: "#socialmedia #contentcreation",
    },
    {
      profile: img6, // Replace with the actual image path
      profileName: "Mark Taylor",
      userName: "@marktaylorwrites",
      review:
        "Fast, reliable, and professional. The blog posts I received were insightful and optimized for search engines.",
      hashtag: "#blogwriting #SEO",
    },
    {
      profile: img5, // Replace with the actual image path
      profileName: "Emma Davis",
      userName: "@emmadaviswrites",
      review:
        "Fantastic service! They helped me build content for my newsletter that not only kept subscribers engaged but also drove conversions.",
      hashtag: "#emailmarketing #newslettercontent",
    },
  ];
  
  return (
    <div className="border-b border-[#252835]  pb-28">
      <div className="container mx-auto px-5 ">
        <div className="text-center pt-24 text-white max-w-xl  mx-auto">
          <Heading label={"What our customers say"} />
          <Subheading
            label={
              "Read why thousands of marketers, and entrepreneurs love us so much."
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between mt-28 font-inter">
          {allReviews.map((data, index) => (
            <div className="bg-white p-5 rounded-md h-fit " key={index}>
              <div className="flex justify-between gap-4">
                <div className="flex gap-3 mb-5">
                  <img src={data.profile} alt="" />
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
    </div>
  );
};

export default Review;
