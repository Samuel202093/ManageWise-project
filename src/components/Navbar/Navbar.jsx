import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useWindowResize from "../../hooks/WindowResize";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // These hook returns the innerWidth of the device screen

  const { windowSize } = useWindowResize();

  // used to toggle the isOpen state so as to close or open the hamburger menu
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
//  That width (the innerWidth gotten from the useWindowResize Hook) is then used to toggle the value of toggleMenu state. This is done so that depending on the screen width the appropriate navigation menu would be displayed.
  useEffect(() => {
    if (windowSize.width > 800) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  }, [windowSize]);
  return (
    <header
      class={`${isOpen ? "bg-white" : "nav-section-bg"}  border-b relative`}
    >
      <div class="md:py-[16px] py-[5px] px-[24px] mx-auto flex flex-wrap  md:p-5 flex-col md:flex-row items-center">
        <div className="flex h-[10vh] md:h-fit w-full justify-between items-center md:w-fit">
          <a class="flex w-[180px] md:w-full mb-4 md:mb-0">
            <img
              src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
              alt="site_logo"
              className="md:h-[50px]"
            />
          </a>
          <div className="hamburger md:hidden mb-4" onClick={handleIsOpen}>
            {isOpen ? (
              <span className="text-3xl">
                <IoMdClose />
              </span>
            ) : (
              <span className="text-3xl">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
        {toggleMenu ? <MobileNav isOpen={isOpen} /> : <DesktopNav />}
      </div>
    </header>
  );
};

export default Navbar;
