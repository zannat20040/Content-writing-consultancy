import Heading from "../Shared Component/Heading";
import Subheading from "../Shared Component/Subheading";
import {
  FaBullhorn,
  FaCheckCircle,
  FaFacebook,
  FaGoogle,
  FaList,
  FaPen,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";

const Feature = () => {
  const tools = [
    {
      icon: <FaGoogle className="text-3xl " />,
      title: "Google Analytics",
      desc: "Track audience behavior and make data-driven decisions to improve content performance.",
    },
    {
      icon: <FaSearch className="text-3xl " />,
      title: "SEMrush",
      desc: "Identify high-performing keywords and optimize SEO rankings to drive traffic.",
    },
    {
      icon: <FaCheckCircle className="text-3xl " />,
      title: "Yoast SEO",
      desc: "Optimize your content for search engines with real-time suggestions for better visibility.",
    },
    {
      icon: <FaPen className="text-3xl " />,
      title: "Grammarly",
      desc: "Ensure error-free, polished content with advanced grammar and style checks.",
    },
    {
      icon: <FaBullhorn className="text-3xl " />,
      title: "Hemingway Editor",
      desc: "Make your writing clear and concise by improving readability and sentence structure.",
    },
    {
      icon: <FaList className="text-3xl " />,
      title: "BuzzSumo",
      desc: "Discover popular content topics in your industry to create engaging and relevant content.",
    },
    {
      icon: <FaGoogle className="text-3xl " />,
      title: "Canva",
      desc: "Create stunning visuals to complement your content and enhance user engagement.",
    },
    {
      icon: <FaFacebook className="text-3xl " />,
      title: "Asana",
      desc: "Manage projects and deadlines with our organized task management system.",
    },
    {
      icon: <FaTwitter className="text-3xl " />,
      title: "Buffer",
      desc: "Schedule and manage social media posts to ensure your content gets maximum reach.",
    },
  ];

  return (
    <div className="border-b border-[#252835]">
      <div className="container mx-auto px-4">
        <div className="text-center mt-24 text-white max-w-lg mx-auto">
          <Heading label={"Tools We Use"} />
          <Subheading
            label={
              "We believe in using the best tools available to create top-tier content. From research to writing and SEO optimization, our team is equipped with the right technology to ensure your content stands out."
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 my-20">
          {tools.map((data, index) => (
            <div
              className="flex gap-4 justify-between font-inter bg-[#282A37] p-6 rounded-xl text-white  items-start"
              key={index}
            >
              {data.icon}
              <div>
                <h1>{data.title}</h1>
                <p className="text-sm text-gray-500 mt-2">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Feature;
