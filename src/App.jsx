import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure ScrollToTop is imported if you have it, else manual implementation layout
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import ProjectCaseStudy from './pages/ProjectCaseStudy'; // Import the case study component

function App() {
  return (
    <Router>
      <ScrollToAnchor /> 
      <div className="App bg-dark-primary flex flex-col min-h-screen">
        <Navbar />
        {/* ScrollToTop component would go here to reset scroll on route change */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-scope/:id" element={<ProjectCaseStudy />} /> {/* Dynamic route for case studies */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
