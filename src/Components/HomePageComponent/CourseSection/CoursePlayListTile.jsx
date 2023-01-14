import React from "react";

function CoursePlayListTile() {
  return (
    <div class="flex justify-between p-6 border-b border-b-dark-text-grey cursor-pointer">
      <div class="flex">
        <text class='text-2xl text-dark-text-grey pr-6'>01</text>
        <text class='text-2xl text-dark-text-white'>Introduction to Flutter 2022</text>
      </div>
      <div class=" flex">
        <text class='text-2xl text-dark-text-grey pr-6'>54:24</text>
        <img src="/assets/play_vector.png" alt="" />
      </div>
    </div>
  );
}

export default CoursePlayListTile;
