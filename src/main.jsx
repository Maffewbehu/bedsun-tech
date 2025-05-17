import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Layout from './components/Layout';
import HomeLayout from './components/HomeLayout'; // 👈 create this if not already
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
