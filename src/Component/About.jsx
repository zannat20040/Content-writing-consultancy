import AboutLayout from "../Shared Component/AboutLayout";
import AboutImageLayout from "../Shared Component/AboutImageLayout";
import img2 from "../assets/about/work (2).avif";
import img3 from "../assets/about/work(1).png";
import img4 from "../assets/about/work(2).png";
import img5 from "../assets/about/work(3).png";
import AboutRight from "../Shared Component/AboutRight";
import AboutLeft from "../Shared Component/AboutLeft";

const About = () => {
  return (
    <div className="container mx-auto px-5 mt-6 about-section">
      {/* 1st */}
      <div className="aboutus grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center ">
        <div className="relative">
          <AboutRight />
        </div>
        <AboutLayout
          h1TagOpeninng={
            "Understanding Your Brand, Audience, and Content Goals"
          }
          pTagopening={
            "We start by learning about your business, target audience, and content goals. During this phase, we discuss your brand voice, objectives, and what you aim to achieve with your content."
          }
        />
      </div>
      {/* 2nd */}
      <div className="mt-20 aboutus grid grid-cols-1 md:grid-cols-2  gap-12 justify-center items-center">
        <div className="ml-0 md:ml-14">
          <AboutLayout
            h1TagOpeninng={"Creating a Custom Plan for Your Content Needs"}
            pTagopening={
              "Once we understand your needs, we create a content strategy tailored to your goals. This includes keyword research, topic selection, and planning the types of content that will resonate with your audience."
            }
          />
        </div>
        <AboutLeft />
      </div>
      {/* 3rd */}
      <div className="mt-20 aboutus grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center ">
        <div className="relative">
          <AboutRight />
        </div>
        <AboutLayout
          h1TagOpeninng={
            "Writing High-Quality, Engaging, and SEO-Friendly Content"
          }
          pTagopening={
            "Our team of expert writers crafts high-quality, engaging, and SEO-optimized content. Each piece is written with your brand’s voice in mind to ensure consistency and authenticity."
          }
        />
      </div>
      {/* 4th */}
      <div className="mt-20 aboutus grid grid-cols-1 md:grid-cols-2  gap-12 justify-center items-center">
        <div className="ml-0 md:ml-14">
          <AboutLayout
            h1TagOpeninng={
              "Working with You to Improve and Finalize the Content"
            }
            pTagopening={
              "We share the content with you for feedback. Your input is important to us. We ensure your vision is captured, making revisions as needed to ensure complete satisfaction."
            }
          />
        </div>
        <AboutLeft />
      </div>
      {/* 5th */}
      <div className="mt-20 aboutus grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center ">
        <div className="relative">
          <AboutRight />
        </div>
        <AboutLayout
          h1TagOpeninng={"Providing You with Ready-to-Publish Content"}
          pTagopening={
            "Once everything is perfect, we deliver the final content, ready to be published. Whether it’s blog posts, website copy, or product descriptions, you’ll receive content that’s optimized for both users and search engines."
          }
        />
      </div>
    </div>
  );
};

export default About;
