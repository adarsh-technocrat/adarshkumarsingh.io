import React from "react";

function CreatorModeOn() {
  return (
    <div className="pl-32 pr-32 pb-44">
      <h1 className="text-5xl font-bold text-[#ffffff]">
        Creator Mode <span className="text-[#56F8AA]">On</span>
      </h1>
      <p className="pt-4 text-[#888888] text-xl">
        Build and deploy a modern SaaS application using the most popular open-source software.{" "}
        <br />
        This course is 12 hours long and is completely live streamed.
      </p>

      <div className="div">
        <div className="flex justify-start items-start mt-10 gap-3">
          {Array.from({ length: 4 }).map((item) => (
            <div className="bg-[#D9D9D9] rounded-md w-[86px] h-[36px] opacity-50" key={item}></div>
          ))}
        </div>
        <div className="flex justify-start items-start mt-10 gap-3">
          {Array.from({ length: 4 }).map((item) => (
            <div className="bg-[#D9D9D9] rounded-md w-full h-[600px]" key={item}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatorModeOn;
