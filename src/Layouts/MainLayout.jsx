import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

function MainLayout({ children }) {
  return (
    <>
      <NavigationBar/>
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
