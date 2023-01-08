import React from "react";
import { Link } from "react-router-dom";
import { navigatinPath } from "../../data/navigation-data";
import combineClasses from "../../hooks/combine-classes";
import useCurrentPath from "../../hooks/use-current-path";

function NavigationBar() {
  const currentPath = useCurrentPath();

  return (
    <div class="h-14 w-auto bg-light-primary dark:bg-dark-primary ml-32 mt-14">
      {navigatinPath.map((item) => (
        <Link
          class={combineClasses([
            "mr-6 text-lg",
            currentPath === item.path ? "font-bold text-dark-text-white" : "font-normal text-dark-text-grey ",
          ])}
          key={item}
          to={item.path}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default NavigationBar;
