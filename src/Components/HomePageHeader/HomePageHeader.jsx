import React from "react";
import TopBlogPostSection from "./TopBlogPostSection";

function HomePageHeader() {
  return (
    <div class="bg-dark-secondary pl-32 pr-32 pb-44 pt-32  mr-32 clip-path-headerPolygon  rounded-tr-2xl  rounded-br-3xl  ">
      <div class="flex justify-between flex-row ">
        <div>
          <div class="text-5xl font-bold text-dark-text-white">Adarsh Kumar Singh</div>
          <div class="text-xl pt-3 font-medium text-dark-text-white relative">
            Software Developer Engineer @ Impulsive web
            <img class="absolute left-72 h-4" src="/assets/vectore-line.png" alt="" />
          </div>
          <p class="text-lg pt-6 text-dark-text-grey w-1/2">
            Helping developers build a faster web. Teaching about web development, Mobile
            development, and React / Next.js , Flutter , UI/UX.
          </p>
        </div>
        <img src="/assets/profile_avatar.png" alt="Profile Pic" />
      </div>
      <TopBlogPostSection />
    </div>
  );
}

export default HomePageHeader;
