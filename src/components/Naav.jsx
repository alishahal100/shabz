import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navv = (props) => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className="mb-4 mt-3 ml-3 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
      style={{ fontFamily: "gilroy-semibold",color:"#E4D48C" }}
    >
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          portfolio
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          menu
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          services
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" pt-16 max-h-[768px] max-w-full overflow-hidden">
      <Navbar className="sticky top-30 sm:top-0 fixed z-10 ml-3 border-none h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#1E1C1C]">
        <div className="flex items-center justify-around  text-blue-gray-900">
          <div className="layer">
            <img className="group-layer" alt="Group layer" src="/first.png" />
            <img className="img" alt="Group layer" src="/second.png" />
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <Button
              
              size="sm"
              className="hidden lg:inline-block border border-[#E4D48C] "
            >
              <span className="text-[#E4D48C]">contact us</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto mr-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login</span>
          </Button>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navv;
