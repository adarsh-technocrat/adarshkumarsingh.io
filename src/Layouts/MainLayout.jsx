import React from "react";
import Footer from "../Components/CommonComponent/Footer/Footer";
import NewsletterSection from "../Components/CommonComponent/NewsletterSection/NewsletterSection";
import NavigationBar from "./NavigationBar/NavigationBar";

function MainLayout({ children }) {
  return (
    <div class="bg-dark-primary">
      <NavigationBar />
      <div>{children}</div>
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}

export default MainLayout;
