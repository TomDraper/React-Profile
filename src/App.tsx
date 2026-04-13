import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom';
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
    <HashRouter>
      <Routes>
        <Route path="/" element = {homePage} />
        <Route path="/projects" element={projectsPage} />
        <Route path="/about" element={aboutPage} />
        <Route path="/contact" element={contactPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;