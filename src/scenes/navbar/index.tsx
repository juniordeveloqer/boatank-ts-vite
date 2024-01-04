import search from "@/assets/search.svg";
import user from "@/assets/user.svg";
import logo from "@/assets/Boatank.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 998px)");
  const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleLogoClick = () => {
    setIsInputVisible(true);
  };

  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarBackground}  top-0 z-30   bg-white py-6`}
      >
        <div
          className={`${flexBetween} mx-auto   xxs:gap-[10px] xs:gap-[200px] sm:gap-[400px] md:gap-[300px] xl:gap-[380px]  `}
        >
          {/* left nav */}
          <img alt="logo" src={logo} className=" cursor-pointer" />

          {/*right nav */}
          {isAboveMediumScreens ? (
            <div
              className={` ${flexBetween}  relative md:gap-[300px] xl:gap-[380px] `}
            >
              <div className={` ${flexBetween}     gap-10 md:gap-10  `}>
                <Link
                  page="Sell"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div className="flex flex-row items-center    justify-between  ">
                  <img src={user} alt="" className="" />

                  <Link
                    page="Log on"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <Link
                  page="Categories"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className=" flex  ">
                {isInputVisible ? (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="absolute top-0 right-0  mr-6 rounded border"
                  />
                ) : null}
                {!isInputVisible ? (
                  <img
                    src={search}
                    alt="Logo"
                    className={`cursor-pointer ${
                      isInputVisible ? "hidden" : ""
                    }`}
                    onClick={handleLogoClick}
                  />
                ) : null}
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-black p-2 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6  text-white" />
            </button>
          )}
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Sell"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Logon"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Categories"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
