import React from "react";

function HomePageHeader() {
  return (
    <div class="flex justify-between flex-row bg-dark-secondary pl-32 pr-32 pb-14 pt-14 ">
      <div>
        <div class="text-5xl font-bold text-dark-text-white">Adarsh Kumar Singh</div>
        <div class="text-xl pt-3 font-medium text-dark-text-white">
          Software Developer Engineer @ Impulsive web
        </div>
        <p class="text-lg pt-6 text-dark-text-grey w-auto">
          Helping developers build a faster web. Teaching about web development, Mobile development,
          and React / Next.js , Flutter , UI/UX.
        </p>
      </div>
      <img src="/assets/profile_avatar.png" alt="Profile Pic" />
    </div>
  );
}

export default HomePageHeader;
