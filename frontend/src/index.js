import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import ContactScreen from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/projects" element={<ProjectScreen />} />
      <Route path="/projects/:id" element={<ProjectDetailsScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/resume" element={<ResumeScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
