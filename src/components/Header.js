import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const Header = () => {
  // Get the current pathname using useLocation hook
  const { pathname } = useLocation();
  const {id}= useParams();
  return (
    <div className="h-[17vh] w-full flex flex-col justify-between">
      {/* Logo Section */}
      <div className="h-[7vh] w-full bg-white">
        <img
          alt=""
          srcSet="https://api.sertifier.com/userdata/08daf47b-89e4-cd1d-208e-96834580c530/d747e244-cfe7-4a53-b0b4-47ad8e0d9ad4.png"
          className="h-full w-fit"
        />
      </div>

      {/* Navigation Section */}
      <div className="h-[9vh] flex flex-col gap-2 items-center justify-between w-11/12 mx-auto">
	  
        {/* Dynamic Header based on the current route */}
        <h1 className="text-2xl font-bold w-full">
          {pathname === "/" ? "Create Flashcard" : "Show Flashcard"}
        </h1>

        {/* Navigation Links */}
        <ul className="w-full h-[6vh] flex gap-6 box-border relative">
          <NavLink
            to="/"
            className={
              "text-lg h-full box-border z-50 transition-all duration-500 ease-in-out overflow-hidden font-semibold " +
              (pathname === "/" ? " text-red-500" : "text-gray-500")
            }
          >
            Create Flashcard
            <hr
              className={
                "transition-all border-[3px] duration-500 ease-in-out rounded-3xl overflow-hidden" +
                (pathname === "/" 
                  ? "  border-red-500 translate-x-[0] "
                  : " translate-x-[-100%] border-gray-200")
              }
            />
          </NavLink>

          <NavLink
            to="/show"
            className={
              "text-lg z-50 transition-all duration-500 ease-in-out overflow-hidden font-semibold " +
              (pathname === "/show" || pathname === `/show/${id}` ? " text-red-500" : "text-gray-500")
            }
          >
            Show Flashcard
            <hr
              className={
                "border-[3px] transition-all duration-500 ease-in-out rounded-3xl overflow-hidden " +
                (pathname === "/show" || pathname === `/show/${id}`
                  ? "  border-red-500 translate-x-[0]"
                  : " translate-x-[-100%] border-gray-200")
              }
            />
          </NavLink>

          {/* Highlight bar at the bottom of the navigation links */}
          <hr className="rounded-3xl overflow-hidden border-slate-200 border-[3px] w-full absolute bottom-0" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
