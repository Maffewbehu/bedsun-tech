import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import SmallBusinessWebsiteDesign from './pages/SmallBusinessWebsiteDesign';
import BusinessAutomation from './pages/BusinessAutomation';
import SmallBusinessITSupport from './pages/SmallBusinessITSupport';
import PersonalTechHelp from './pages/PersonalTechHelp';

import Layout from './components/Layout';
import HomeLayout from './components/HomeLayout';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Home page uses a minimal layout */}
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Other routes use main Layout with Navbar */}
          <Route element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route
              path="small-business-website-design"
              element={<SmallBusinessWebsiteDesign />}
            />
            <Route path="business-automation" element={<BusinessAutomation />} />
            <Route
              path="small-business-it-support"
              element={<SmallBusinessITSupport />}
            />
            <Route path="personal-tech-help" element={<PersonalTechHelp />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);