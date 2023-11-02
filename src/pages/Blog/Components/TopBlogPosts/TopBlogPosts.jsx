import React from "react";

function TopBlogPosts() {
  return (
    <section>
      <div className="h-[454px] w-auto bg-[#D9D9D9] mt-10 rounded-sm "></div>
      <div className="flex mt-7">
        <div class="text-dark-text-white pr-2 hover:underline hover:animate-pulse cursor-pointer">
          View all blogs
        </div>
        <img class="h-7" src="/assets/vector-arrow.png" alt="" />
      </div>
    </section>
  );
}

export default TopBlogPosts;
