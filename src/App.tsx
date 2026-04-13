import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './css/vars.css';


import HomePage from "./pages/home.tsx";
import AboutPage from "./pages/about.tsx";
import ContactPage from "./pages/contact.tsx";
import ProjectsPage from "./pages/projects.tsx";

const homePage = HomePage();
const projectsPage = ProjectsPage();
const aboutPage = AboutPage();
const contactPage = ContactPage();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/React-Profile/" element = {homePage} />
        <Route path="/React-Profile/projects" element={projectsPage} />
        <Route path="/React-Profile/about" element={aboutPage} />
        <Route path="/React-Profile/contact" element={contactPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;