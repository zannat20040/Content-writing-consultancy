import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const SITEMAP = [
    {
      title: "Company",
      links: ["About Us", "Our Services", "Case Studies", "Careers"],
    },
    {
      title: "Support",
      links: [
        "Customer Support",
        "FAQ",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Content Strategy Guide",
        "SEO Tips & Tutorials",
        "Free Resources & eBooks",
      ],
    },
    {
      title: "Social",
      links: [
        "Follow Us on Twitter",
        "Like Us on Facebook",
        "Connect on LinkedIn",
        "Subscribe to Our YouTube Channel",
      ],
    },
  ];
  

  return (
    <footer className=" ">
      <div className="w-full mt-20 container mx-auto px-5">
        <div className=" grid w-full  text-white gap-8 py-12 grid-cols-2 lg:grid-cols-4 justify-between">
          {SITEMAP.map(({ title, links, index }) => (
            <div key={index} className="w-full">
              <Typography
                variant="small"
                className="mb-4 font-semibold  "
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    className="font-light text-sm"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105  "
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;
