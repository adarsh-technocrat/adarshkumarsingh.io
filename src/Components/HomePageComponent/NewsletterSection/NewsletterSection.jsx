import React from "react";

function NewsletterSection() {
  return (
    <div class="pl-32 pr-32 mt-40">
      <div class="bg-dark-secondary h-80 w-auto rounded-md p-16">
        <text class="text-dark-text-white font-bold text-3xl  tracking-tight">Subscribe to the newsletter</text>
       <p class="text-dark-text-white font-normal text-xl pt-2  tracking-tight">Get emails from me about web development, tech, and early access to new articles.</p>
       <div class="mt-8 bg-dark-primary rounded-md w-full h-20 flex flex-row p-4">
          <input class="w-full bg-transparent focus:outline-none text-dark-text-white  mr-3 placeholder:text-dark-text-grey" placeholder="john@gmail.com"/>
          <button class="bg-dark-grephiteColor pr-6 pl-6 text-dark-text-white rounded-md">Subscribe</button>
       </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
