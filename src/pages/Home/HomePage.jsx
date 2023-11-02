import React from "react";
import CourseSection from "../../Components/HomePageComponent/CourseSection/CourseSection";
import StatsSection from "../../Components/HomePageComponent/StatsSection/StatsSection";
import ProjectSection from "../Project/Components/ProjectSection/ProjectSection";
import TopBlogPostSection from "../../Components/HomePageComponent/TopBlogPostSection/TopBlogPostSection";
import HeroLayout from "../../Layouts/HeroLayout";

function HomePage() {
  return (
    <section className="h-auto w-auto bg-dark-primary pt-10 pb-32 ">
      <HeroLayout>
        <TopBlogPostSection />
      </HeroLayout>
      <CourseSection />
      <ProjectSection />
      <StatsSection />
    </section>
  );
}

export default HomePage;
