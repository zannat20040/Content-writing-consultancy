import ResponsiveNavbar from "../Component/ResponsiveNavbar";
import Banner from "../Component/Banner";
import About from "../Component/About";
import HappyClient from "../Component/HappyClient";
import Feature from "../Component/Feature";
import FAQ from "../Component/FAQ";
import Review from "../Component/Review";
import PackagePlans from "../Component/PackagePlans";
import CTA from "../Component/CTA";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div className="bg-12141D">
      <div className="">
        <ResponsiveNavbar />
        <Banner />
        <HappyClient />
        <About />
        <Feature />
      </div>
      <div className="bg-gradient-to-t from-[#17192400] to-[#171924]">
        <Review />
        <PackagePlans />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
