import React from "react";
import BlogPostCard from "../BlogPost/BlogPostCard";

function TopBlogPostSection() {
  return (
    <div class="pt-9">
      <div class="flex pb-8">
        {[1, 2, 3].map((item) => (
          <BlogPostCard key={item} />
        ))}
      </div>

      <div className="flex">
        <div class="text-dark-text-white pr-2">Read all posts</div>
        <img class="h-7" src="/assets/vector-arrow.png" alt="" />
      </div>
    </div>
  );
}

export default TopBlogPostSection;
