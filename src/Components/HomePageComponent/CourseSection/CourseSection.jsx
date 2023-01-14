import React from "react";
import CoursePlayListTile from "./CoursePlayListTile";

function CourseSection() {
  return (
    <div class="pl-32 pr-32">
      <text class="text-5xl font-bold text-dark-text-white">Learn </text>
      <text class="text-5xl font-bold text-dark-text-blue">Dart</text>
      <text class="text-5xl font-bold text-dark-text-white"> & Flutter</text>
      <p class="text-lg pt-6 text-dark-text-grey w-1/2">
        Learn how to use Dart and Flutter to build web, mobile, and desktop applications. These
        tools allow you to create high-performance, visually attractive apps for a variety of
        platforms.
      </p>
      <div class="pt-14">
        {[1, 2, 3, 4].map((item) => (
          <CoursePlayListTile key={item} />
        ))}
      </div>
      <div class="text-dark-text-white pt-7 hover:underline hover:animate-pulse cursor-pointer">View all videos</div>
    </div>
  );
}

export default CourseSection;
