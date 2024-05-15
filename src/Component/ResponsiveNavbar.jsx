import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Banner from "./Banner";
import logo from "../assets/ed49ac106692c8d48d005987f226611a.png";
import ButtonLayout from "../Shared Component/ButtonLayout";

const ResponsiveNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-FAFAFA ">
      <a href="#" className="flex items-center">
        <img src={logo} alt="" className="w-20" />
      </a>
      <Typography as="li" variant="small" className="font-normal">
        <a href="#" className="flex items-center font-inter">
          Demos
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Blog
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Pages
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 bg-12141D border-0 shadow-none max-w-full rounded-none px-4 py-0">
        <div className="flex items-center justify-between ">
          <div className="flex items-center  gap-4 w-full  justify-between">
            <div className="mr-4 hidden lg:block ">{navList}</div>
            <div className="flex items-end gap-x-3">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 text-sm px-7 border border-[#FFFFFF4D] rounded font-normal"
              >
                <span>Sign in</span>
              </Button>
              <ButtonLayout label={"Get Started Free"} />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1 ">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 text-sm px-7 border border-[#FFFFFF4D] rounded font-normal"
            >
              <span>Sign in</span>
            </Button>
            <ButtonLayout label={"Get Started Free"} fullWidth />
          </div>
        </MobileNav>
      </Navbar>
  );
};

export default ResponsiveNavbar;
