import React from "react";

function BlogPostCard() {
  return (
    <div class=" pr-7 -rotate-6 ">
      {/* <div class="bg-white shadow-md  border-gray-200 rounded-lg h-72 w-96 border border-dark-text-white  mb-5 "> */}
      <div class="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
        <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
        <div class="relative rounded-[15px] bg-white p-6">
          <div class="space-y-4">
            <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
            <p class="text-lg font-semibold text-slate-800">Hover me!</p>
            <p class="font-md text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus temporibus est
              ut nisi nam at adipisci sunt dolore quibusdam.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default BlogPostCard;
