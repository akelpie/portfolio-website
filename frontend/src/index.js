import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
	RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/projects" element={<ProjectScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/resume" element={<ResumeScreen />} />
      <Route path="/projects/:id" element={<ProjectDetailsScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-website">
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
