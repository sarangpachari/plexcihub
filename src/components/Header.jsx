import React from "react";
import TrueFocus from "./react-bits/TrueFocus";

const Header = () => {
  return (
    <div className="flex justify-start px-6 py-4">
      <TrueFocus
        sentence="PlexCi Hub"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </div>
  );
};

export default Header;
