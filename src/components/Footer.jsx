import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import logo from "../assets/images/logo.png";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div
      id="footer-container"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-main to-second h-28 md:h-40 w-[100vw] shadow-[0px_15px_38px_1px_#414529]"
    >
      <div className="flex justify-evenly w-full items-center pb-3">
        <div className="flex items-center">
          <HashLink smooth to={"#top-of-page"}>
            <ChevronUpIcon
              aria-hidden="true"
              className="back-to-top h-5 w-5 md:h-6 md:w-6 text-gray-600 cursor-pointer rounded-lg border border-main mr-2"
            />
          </HashLink>
          <p className="text-xs md:text-base">Back to top</p>
        </div>
        <div>
          <NavLink
                    to={'/sign-in'}
                   className="text-xs md:text-base mr-4"
                  >
                    Sign in
          </NavLink>
          <NavLink
                    to={'/register'}
                   className="text-xs md:text-base"
                  >
                    Register
          </NavLink>
        </div>
      </div>

      <div className="flex justify-center items-center w-full pb-2">
        <Logo height='h-8' responsiveClasses={'md:h-12'}/>
        <p className="text-xs md:text-base ml-4">What kids say!!!</p>
      </div>
      <p id="copyright" className="text-xs md:text-base">
        ©FunenKidismLoremIpson 2024
      </p>
    </div>
  );
}
