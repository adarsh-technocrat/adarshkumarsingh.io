import React from "react";
import PathSection from "./PathSection";
import SpotifySection from "./SpotifySection";

function Footer() {
  return (
    <div class="pl-32 pr-32 pt-36 bg-dark-primary">
      <div class="h-[1px] bg-dark-text-grey w-full mb-11"></div>
      <SpotifySection />
      <PathSection/>
    </div>
  );
}

export default Footer;
