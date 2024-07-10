import React, { useState } from "react";
import logo from "../assets/navLogo.png";
import leetcode from "../assets/leetcode.svg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi"
import { RxCross2 } from "react-icons/rx";
import { FaSquareXTwitter, } from "react-icons/fa6";
import CustomBox from "./CustomBox";
import {Link} from 'react-scroll'
import useWindowSize from "./useWindowSize";

const Navbar = () => {
  const size = useWindowSize()
  const [hamburgerActiveStatus, sethamburgerActiveStatus] = useState(false)
  return (
    <nav className="lg:px-10 sm:px-10 p-2 fixed z-20 w-full">
      <CustomBox height="120px">
        <div className="h-full w-full bg-[#212428] flex items-center justify-between p-6 rounded-xl">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-[50px] lg:pl-11 sm:block lg:block hidden"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="flex hidden lg:block">
            <ul className="flex gap-10 lg:text-xl lg:gap-20">
              <li className="hover:text-[#e30c48] transition-all cursor-pointer">
                <Link
                  activeClass="text-customPink"
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-[#e30c48] transition-all cursor-pointer">
                <Link
                  activeClass="text-customPink"
                  to="Technologies"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Technologies
                </Link>
              </li>
              <li className="hover:text-[#e30c48] transition-all cursor-pointer">
                <Link
                  activeClass="text-customPink"
                  to="Education"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li className="hover:text-[#e30c48] transition-all cursor-pointer">
                <Link
                  activeClass="text-customPink"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="m-8 flex items-center justify-center lg:gap-4 text-2xl gap-6">
            <a
              href="https://www.linkedin.com/in/niraj-kumar-barnwal-278241245/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer hover:text-[#e30c48] transition-all" />
            </a>
            <a href="https://github.com/Niraj-Kr-29" target="_blank">
              <FaGithub className="cursor-pointer hover:text-[#e30c48] transition-all" />
            </a>
            <a
              href="https://www.instagram.com/nirajkr_29?igsh=MWF6Y2sxeHp6MTZucg=="
              target="_blank"
            >
              <FaInstagram className="cursor-pointer hover:text-[#e30c48] transition-all" />
            </a>
            <a href="https://x.com/Anything844154" target="_blank">
              <FaSquareXTwitter className="cursor-pointer hover:text-[#e30c48] transition-all" />
            </a>
            <a href="https://leetcode.com/u/Niraj_Kr/" target="_blank">
              <img className="cursor-pointer" src={leetcode} alt="" />
            </a>
          </div>
          <button
            onClick={() => {
              sethamburgerActiveStatus(!hamburgerActiveStatus);
            }}
          >
            <div className="lg:hidden pr-4">
              {hamburgerActiveStatus == true ? (
                <div>
                 <RxCross2 className="w-[25px] h-[25px] cursor-pointer hover:text-[#e30c48] transition-all" />
              </div>
              ) : (
                <div>
                  <GiHamburgerMenu className="w-[25px] h-[25px] cursor-pointer hover:text-[#e30c48] transition-all" />
                </div>
              )}
            </div>
          </button>
        </div>
      </CustomBox>

      <div className="flex justify-center">
        <div className= {`transition-all ${hamburgerActiveStatus ? 'opacity-100 visible' : 'opacity-0 invisible'} h-80 w-64 bg-buttonGrey2 rounded-xl pb-10`} >
          <ul className=" flex flex-col gap-10 pt-12 items-center">
            <li className="hover:text-[#e30c48] transition-all cursor-pointer">
              <Link
                activeClass="text-customPink"
                to="Hero"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-[#e30c48] transition-all cursor-pointer">
              <Link
                activeClass="text-customPink"
                to="Technologies"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Technologies
              </Link>
            </li>
            <li className="hover:text-[#e30c48] transition-all cursor-pointer">
              <Link
                activeClass="text-customPink"
                to="Education"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li className="hover:text-[#e30c48] transition-all cursor-pointer">
              <Link
                activeClass="text-customPink"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
