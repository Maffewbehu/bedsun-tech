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
import SeniorTechHelp from './pages/SeniorTechHelp';
import PrinterSetupTroubleshooting from './pages/PrinterSetupTroubleshooting';
import WifiSetupTroubleshooting from './pages/WifiSetupTroubleshooting';
import EmailPasswordScamHelp from './pages/EmailPasswordScamHelp';
import SmartTvPhoneTabletSetup from './pages/SmartTvPhoneTabletSetup';
import AIIntegrationSmallBusiness from './pages/AIIntegrationSmallBusiness';
import BusinessTechAIOpportunityScan from './pages/BusinessTechAIOpportunityScan';

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
              path="ai-integration-small-business"
              element={<AIIntegrationSmallBusiness />}
            />
            <Route
              path="business-tech-ai-opportunity-scan"
              element={<BusinessTechAIOpportunityScan />}
            />
            <Route
              path="small-business-it-support"
              element={<SmallBusinessITSupport />}
            />
            <Route path="personal-tech-help" element={<PersonalTechHelp />} />
            <Route path="senior-tech-help" element={<SeniorTechHelp />} />
            <Route
              path="printer-setup-troubleshooting"
              element={<PrinterSetupTroubleshooting />}
            />
            <Route
              path="wifi-setup-troubleshooting"
              element={<WifiSetupTroubleshooting />}
            />
            <Route
              path="email-password-scam-help"
              element={<EmailPasswordScamHelp />}
            />
            <Route
              path="smart-tv-phone-tablet-setup"
              element={<SmartTvPhoneTabletSetup />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);