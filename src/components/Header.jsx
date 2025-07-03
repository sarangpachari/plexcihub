import React from "react";
import TrueFocus from "./react-bits/TrueFocus";

const Header = () => {
  return (
    <div className="flex justify-start p-6 fixed backdrop-blur-3xl w-full">
      <TrueFocus
        sentence="PlexCi Hub"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
    </div>
  );
};

export default Header;
