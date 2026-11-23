export const INQUIRY_SERVICES = [
  { id: 'personal-tech', label: 'Personal tech help', audience: 'personal' },
  { id: 'senior-tech', label: 'Senior tech help', audience: 'personal' },
  { id: 'printer', label: 'Printer setup or troubleshooting', audience: 'personal' },
  { id: 'wifi', label: 'Wi-Fi setup or troubleshooting', audience: 'personal' },
  { id: 'email-accounts', label: 'Email, passwords or scam concerns', audience: 'personal' },
  { id: 'device-setup', label: 'Smart TV, phone or tablet setup', audience: 'personal' },
  { id: 'business-it', label: 'Small business IT support', audience: 'business' },
  { id: 'website', label: 'Website design or redesign', audience: 'business' },
  { id: 'automation', label: 'Business automation', audience: 'business' },
  { id: 'ai-integration', label: 'AI integration', audience: 'business' },
  { id: 'opportunity-scan', label: 'Business Tech & AI Opportunity Scan', audience: 'business' },
];

export function getInquiryService(id) {
  return INQUIRY_SERVICES.find(service => service.id === id) || null;
}

export function buildInquiryPath(serviceId, audience) {
  const service = getInquiryService(serviceId);
  if (service) return `/contact?service=${encodeURIComponent(service.id)}`;
  if (audience === 'personal' || audience === 'business') return `/contact?audience=${audience}`;
  return '/contact';
}
