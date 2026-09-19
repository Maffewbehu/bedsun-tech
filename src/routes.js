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
import AIConsultant from './pages/AIConsultant';
import Blog from './pages/Blog';
import WhyDoesMyPrinterSayOffline from './pages/WhyDoesMyPrinterSayOffline';
import HowToImproveWifiSignalInYourHome from './pages/HowToImproveWifiSignalInYourHome';
import HowToTellIfEmailOrTextIsAScam from './pages/HowToTellIfEmailOrTextIsAScam';
import WhatCanAIActuallyDoForSmallBusiness from './pages/WhatCanAIActuallyDoForSmallBusiness';
import HowToAutomateWebsiteFormFollowUp from './pages/HowToAutomateWebsiteFormFollowUp';

export const pageRoutes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/services", Component: Services },
  { path: "/small-business-website-design", Component: SmallBusinessWebsiteDesign },
  { path: "/business-automation", Component: BusinessAutomation },
  { path: "/ai-integration-small-business", Component: AIIntegrationSmallBusiness },
  { path: "/business-tech-ai-opportunity-scan", Component: BusinessTechAIOpportunityScan },
  { path: "/ai-consultant", Component: AIConsultant },
  { path: "/small-business-it-support", Component: SmallBusinessITSupport },
  { path: "/personal-tech-help", Component: PersonalTechHelp },
  { path: "/senior-tech-help", Component: SeniorTechHelp },
  { path: "/printer-setup-troubleshooting", Component: PrinterSetupTroubleshooting },
  { path: "/wifi-setup-troubleshooting", Component: WifiSetupTroubleshooting },
  { path: "/email-password-scam-help", Component: EmailPasswordScamHelp },
  { path: "/smart-tv-phone-tablet-setup", Component: SmartTvPhoneTabletSetup },
  { path: "/contact", Component: Contact },
  { path: "/projects", Component: Projects },
  { path: "/blog", Component: Blog },
  { path: "/blog/why-does-my-printer-say-offline", Component: WhyDoesMyPrinterSayOffline },
  { path: "/blog/how-to-improve-wifi-signal-in-your-home", Component: HowToImproveWifiSignalInYourHome },
  { path: "/blog/how-to-tell-if-email-or-text-is-a-scam", Component: HowToTellIfEmailOrTextIsAScam },
  { path: "/blog/what-can-ai-actually-do-for-small-business", Component: WhatCanAIActuallyDoForSmallBusiness },
  { path: "/blog/how-to-automate-website-form-follow-up", Component: HowToAutomateWebsiteFormFollowUp },
];
