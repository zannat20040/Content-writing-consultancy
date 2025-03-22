import logo from "../assets/Client/Screenshot 2025-03-23 023001.png";
import logo1 from "../assets/Client/Screenshot 2025-03-23 023001.png";
import logo2 from "../assets/Client/Screenshot 2025-03-23 023148.png";
import logo3 from "../assets/Client/logo.png";
import logo4 from "../assets/Client/logo1.png";
import logo5 from "../assets/Client/logo1.png";
import logo6 from "../assets/Client/logo2.png";
import logo7 from "../assets/Client/Screenshot 2025-03-23 023001.png";

const HappyClient = () => {
  const clientLogos = [
    { clientImg: logo3 },
    { clientImg: logo4 },
    { clientImg: logo1 },
    { clientImg: logo6 },
    { clientImg: logo5 },
    { clientImg: logo7 },
    { clientImg: logo2 },
    { clientImg: logo },
  ];

  return (
    <div className="container mx-auto px-5 py-16">
      <p className="font-outfit text-2xl text-white text-center">
        Trusted by Over 3,000 Satisfied Clients{" "}
      </p>

      <div className="grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center max-w-2xl mx-auto mt-16 ">
        {clientLogos.map((data, index) => (
          <img
            src={data.clientImg}
            alt=""
            key={index}
            className=" filter grayscale"
          />
        ))}
      </div>
    </div>
  );
};

export default HappyClient;
