import React from "react";
import HeroLayout from "../../Layouts/HeroLayout";
import TopBlogPosts from "./Components/TopBlogPosts/TopBlogPosts";
import CreatorModeOn from "./Components/CreatorModeOn/CreatorModeOn";
import Community from "./Components/Community/Community";
import Podcast from "./Components/Podcast/Podcast";

function BlogPage() {
  return (
    <section className="h-auto w-auto bg-dark-primary pt-10 pb-32 ">
      <HeroLayout>
        <TopBlogPosts />
      </HeroLayout>
      <CreatorModeOn />
      <Podcast />
      <Community />
    </section>
  );
}

export default BlogPage;
