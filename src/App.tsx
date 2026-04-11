import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './css/vars.css';


import HomePage from "./pages/home.tsx";
import AboutPage from "./pages/about.tsx";

const homePage = HomePage();
const aboutPage = AboutPage();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/React-Profile/" element = {homePage} />
        <Route path="/React-Profile/about" element={aboutPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;