import React from "react";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";

function HomePage() {
  return (
    <section class="h-auto w-auto bg-dark-primary pt-10 pb-32 ">
      <HomePageHeader />
      <img class="absolute right-40 top-16" src="/assets/vector_illust.png" alt="" />
    </section>
  );
}

export default HomePage;
