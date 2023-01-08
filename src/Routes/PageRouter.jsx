import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import BlogPage from "../pages/Blog/BlogPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import HomePage from "../pages/Home/HomePage";
import ProjectPage from "../pages/Project/ProjectPage";
function PageRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />{" "}
          </MainLayout>
        }
      />
      <Route
        path="/project"
        element={
          <MainLayout>
            <ProjectPage />{" "}
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <DashboardPage />{" "}
          </MainLayout>
        }
      />
      <Route
        path="/blog"
        element={
          <MainLayout>
            <BlogPage />{" "}
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default PageRouter;
