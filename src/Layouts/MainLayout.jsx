import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

function MainLayout({ children }) {
  return (
    <div class="bg-dark-primary">
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
}

export default MainLayout;
