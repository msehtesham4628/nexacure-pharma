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

export function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
