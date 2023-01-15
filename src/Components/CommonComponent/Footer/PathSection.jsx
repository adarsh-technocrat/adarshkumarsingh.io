import React from "react";
import { Link } from "react-router-dom";
import { footerPath } from "../../../data/footer-data";

function PathSection() {
  return (
    <div class="flex flex-row p-11 justify-between">
      <div class="flex flex-col ">
        {footerPath[0].list.map((data) => (
          <Link class="font-normal text-dark-text-grey text-2xl pb-5 cursor-pointer" key={data}>
            {data.title}
          </Link>
        ))}
      </div>
      <div class="flex flex-col ">
        {footerPath[1].list.map((data) => (
          <Link
            to={{ pathname: data.path }}
            class="font-normal text-dark-text-grey text-2xl pb-5 cursor-pointer"
            key={data}
          >
            {data.title}
          </Link>
        ))}
      </div>
      <div class="flex flex-col ">
        {footerPath[2].list.map((data) => (
          <Link
            to={data.path}
            class="font-normal text-dark-text-grey text-2xl pb-5 cursor-pointer"
            key={data}
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PathSection;
