import React from "react";
import { useLocation } from "react-router";

function HeroLayout({ children }) {
  const location = useLocation();

  const renderDynamicHeroTitle = () => {
    if (location.pathname === "/") return "Adarsh Kumar Singh";
    const firstChar = location.pathname.split("/")[1][0];
    const secondWord = location.pathname.split("/")[1];
    return firstChar.toUpperCase() + secondWord.substring(1, secondWord.length);
  };

  return (
    <div class="pl-32 pr-32 pb-44 pt-32  mr-32 rounded-tr-2xl  rounded-br-3xl  ">
      <div class="flex justify-between flex-row ">
        <div>
          <div class="text-5xl font-bold text-dark-text-white">{renderDynamicHeroTitle()}</div>
          <div class="text-xl pt-3 font-medium text-dark-text-white relative">
            Senior Software Engineer @ Styava
            <img class="absolute left-56 h-4" src="/assets/vectore-line.png" alt="" />
          </div>
          <p class="text-lg pt-6 text-dark-text-grey w-1/2">
            Helping developers build a faster web. Teaching about web development, Mobile
            development, and React / Next.js , Flutter , UI/UX.
          </p>
        </div>
        <img
          src="/assets/profile_avatar.png"
          alt="Profile Pic"
          className="cursor-pointer h-[250px] w-[250px] filter grayscale contrast-100"
        />
      </div>
      {children}
      <img class="absolute right-40 top-16" src="/assets/vector_illust.png" alt="" />
    </div>
  );
}

export default HeroLayout;
