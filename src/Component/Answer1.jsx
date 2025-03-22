export default function Answer1() {
  const services = [
    {
      title: "Blog Posts",
      description: "Engaging, SEO-optimized content to attract readers.",
    },
    {
      title: "SEO Content",
      description: "Designed to improve search rankings and drive traffic.",
    },
    {
      title: "Website Copy",
      description: "Persuasive and conversion-driven copy for your site.",
    },
    {
      title: "Product Descriptions",
      description: "Clear, compelling copy that highlights product features.",
    },
    {
      title: "Social Media Content",
      description:
        "Creative posts to engage your audience and boost brand presence.",
    },
    {
      title: "Ad & Newsletter Copy",
      description:
        "High-converting content for ads, email campaigns, and newsletters.",
    },
  ];

  return (
    <div className=" ">
      <div className="container mx-auto  text-B7B8BB">
        <p className=" ">
          We offer a wide range of content writing services to meet your
          business needs:
        </p>

        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <span className="font-bold ">{service.title}</span> :{" "}
              <span>{service.description}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3">
          We also offer <span className="font-bold ">Editing</span>,{" "}
          <span className="font-bold ">Proofreading</span> ,
          <span className="font-bold ">Content Strategy</span> and{" "}
          <span className="font-bold ">Consultation Services</span>.
        </p>

        <div className="mt-12 text-center"></div>
      </div>
    </div>
  );
}
