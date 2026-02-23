import React from 'react';
import Hero from '../components/Hero';
import Competencies from '../components/Competencies';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Methodology from '../components/Methodology';
import Team from '../components/Team';
import CTASection from '../components/CTASection'; // Keep CTA for Home Page

// 1. Create a Home Page Component
const Home = () => (
  <>
    <Hero />
    <Competencies />
    <TechStack />
    <Projects />
    <Methodology />
    <Team />
    <CTASection /> {/* CTA remains here to lead to Contact page */}
  </>
);

export default Home;