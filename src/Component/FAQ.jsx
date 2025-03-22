import { useState } from "react";
import Heading from "../Shared Component/Heading";
import { Button } from "@material-tailwind/react";
import Answer1 from "./Answer1";
import { GoDotFill } from "react-icons/go";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqData = [
    {
      question: "What services do you offer?",
    },
    {
      question: "How do I get started with your services?",
    },
    {
      question: "How long does it take to complete a project?",
    },
    {
      question: "How do you ensure the content is original?",
    },
    {
      question: "Can you write content for any industry?",
    },
    {
      question: "Do you provide SEO content?",
    },
  ];

  // Function to toggle the active question
  const handleToggle = (index) => {
    setActiveQuestion(index); // Open the selected answer
  };

  return (
    <div className="pt-20 pb-32 border-b border-[#252835] mt-16">
      <div className="container mx-auto px-5">
        <div className="max-w-lg mx-auto text-white ">
          <Heading
            label={"Got Questions? Explore Our Frequently Asked Questions"}
          />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between">
          <ul className="flex gap-2 flex-col col-span-1">
            {faqData.map((faq, index) => (
              <li key={index}>
                <Button
                  variant="text"
                  className={`focus:border-0 ${
                    activeQuestion === index
                      ? "w-full inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r  to-[#E100FF] from-[#7F00FF] transition-all duration-700 ease-in-out"
                      : "inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded-md font-normal bg-12141D border border-[#FFFFFF4D] w-full"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <span>{faq.question}</span>
                </Button>
              </li>
            ))}
          </ul>

          <div className="md:col-span-2 lg:col-span-3 bg-[#1D232A] rounded-md p-10 pt-5">
            <div className="flex  mb-8">
              <GoDotFill className="text-2xl text-red-600" />{" "}
              <GoDotFill className="text-2xl text-yellow-600" />{" "}
              <GoDotFill className="text-2xl text-green-600" />
            </div>
            {activeQuestion === 0 ? (
              <Answer1 />
            ) : activeQuestion === 1 ? (
              <p className="text-[#B7B8BB]">
                To get started with our services, simply reach out to us through
                the <span className="font-bold">Contact Us</span> page or
                schedule a <span className="font-bold">free consultation</span>.{" "}
                <br /> <br />
                During the consultation, we’ll discuss your content needs, brand
                goals, and any specific requirements you might have. From there,
                we’ll work with you to create a tailored content strategy that
                fits your business objectives. <br />
                <br />
                After the initial discussion, we’ll begin working on the
                content, ensuring it aligns with your vision and drives results.
              </p>
            ) : activeQuestion === 2 ? (
              <p className="text-[#B7B8BB]">
                The timeline for completing a project depends on its scope and
                complexity. <br />
                <br />
                For instance, a standard blog post typically takes 3-5 business
                days, while larger projects such as website copy or e-commerce
                product descriptions may take longer, often 7-10 business days.
                After discussing your project in detail, we provide a clear
                timeline and ensure all deliverables meet your deadlines. <br />
                <br />
                We always prioritize quality and accuracy, ensuring that we
                deliver on time without compromising the integrity of your
                content.
              </p>
            ) : activeQuestion === 3 ? (
              <p className="text-[#B7B8BB]">
                We take originality seriously. All the content we produce is
                100% unique and thoroughly researched. <br />
                <br />
                Before delivering any content, we run it through advanced
                plagiarism detection tools to ensure that it’s free of copied
                material. We also conduct in-depth research to create valuable,
                accurate, and well-informed content that’s both original and
                aligned with your brand’s voice. <br />
                <br />
                Our writers are experts in various fields, and they craft custom
                content tailored to your needs, ensuring that it stands out and
                adds value to your audience.
              </p>
            ) : activeQuestion === 4 ? (
              <p className="text-[#B7B8BB]">
                <span className="font-bold">Yes!</span> <br />
                <br /> Our team has extensive experience writing for various
                industries, including e-commerce, healthcare, technology, real
                estate, finance, and more. Whether you&apos;re in a niche
                industry or a broader market, we are adept at understanding your
                unique needs and tailoring content to suit your target audience.{" "}
                <br /> <br /> We ensure that each piece of content we create
                resonates with your specific market while maintaining high
                standards of quality and relevance.
              </p>
            ) : activeQuestion === 5 ? (
              <p className="text-[#B7B8BB]">
                <span className="font-bold">Yes!</span> <br />
                <br />
                We specialize in creating SEO-optimized content. From keyword
                research to on-page optimization, our content is designed to
                help your website rank higher on search engines and drive
                organic traffic. We ensure that all content is crafted with SEO
                best practices in mind, such as proper keyword placement,
                internal linking, meta descriptions, and more. <br /> <br /> Our
                goal is to provide content that not only engages your audience
                but also improves your search engine visibility and overall
                digital presence.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
