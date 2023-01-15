import React from "react";
import CourseSection from "../../Components/HomePageComponent/CourseSection/CourseSection";
import HomePageHeader from "../../Components/HomePageComponent/HomePageHeader/HomePageHeader";
import StatsSection from "../../Components/HomePageComponent/StatsSection/StatsSection";

function HomePage() {
  return (
    <section class="h-auto w-auto bg-dark-primary pt-10 pb-32 ">
      <HomePageHeader />
      <img class="absolute right-40 top-16" src="/assets/vector_illust.png" alt="" />
      <CourseSection />
      <StatsSection />
    </section>
  );
}

export default HomePage;
