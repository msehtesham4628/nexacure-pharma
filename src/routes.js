export const routes = {
  home: '/',
  about: '/about',
  capabilities: '/capabilities',
  whyNexacure: '/why-nexacure',
  compliance: '/compliance',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms',
  disclaimer: '/disclaimer',
};

const sectionByPath = {
  '/about': 'about',
  '/capabilities': 'capabilities',
  '/why-nexacure': 'why-nexacure',
  '/compliance': 'compliance',
  '/contact': 'contact',
};

export function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  const sectionId = sectionByPath[path];
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
