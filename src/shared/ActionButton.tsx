import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="hover:bg-purple rounded-md bg-secondary-500 px-10 py-2 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Categories)}
      href={`#${SelectedPage.Categories}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
