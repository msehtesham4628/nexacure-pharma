import RouteLink from './RouteLink';
import { routes } from '../routes';

const pages = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    updated: 'Last updated: 20 August 2026',
    sections: [
      ['Information You Provide', 'When you use the enquiry form, you may choose to provide your name, email address, phone number, subject, and message.'],
      ['How Enquiries Are Sent', 'This website opens your email application to send an enquiry to NEXACURE PHARMA. The website does not itself store form submissions.'],
      ['WhatsApp', 'Choosing the WhatsApp contact option opens WhatsApp with a pre-filled message. Your use of WhatsApp is subject to its own privacy practices and terms.'],
      ['Contact', 'For questions about this policy, contact support@nexacurepharma.in.'],
    ],
  },
  '/terms': {
    title: 'Terms of Use',
    updated: 'Last updated: 20 August 2026',
    sections: [
      ['Use of This Website', 'This website is provided for general information about NEXACURE PHARMA and for making enquiries.'],
      ['No Medical Advice', 'Content on this website is not medical advice and must not be used as a substitute for advice from a qualified healthcare professional.'],
      ['Website Content', 'Information on this website may be updated without notice. NEXACURE PHARMA does not guarantee that every item of content will always be complete, current, or available.'],
      ['Contact', 'For questions about these terms, contact support@nexacurepharma.in.'],
    ],
  },
  '/disclaimer': {
    title: 'Disclaimer',
    updated: 'Last updated: 20 August 2026',
    sections: [
      ['General Information', 'The information on this website is provided for general informational purposes only.'],
      ['Healthcare Information', 'Nothing on this website is intended to diagnose, treat, cure, or prevent any condition, or to replace professional medical advice.'],
      ['External Services', 'Email and WhatsApp links are provided for convenience. NEXACURE PHARMA is not responsible for the content, availability, or privacy practices of external services.'],
      ['No Reliance', 'Visitors should use their own judgement and seek appropriate professional advice where needed.'],
    ],
  },
};

export function isLegalPath(path) { return Boolean(pages[path]); }

export default function LegalPage({ path }) {
  const page = pages[path];
  return <main className="min-h-screen bg-[#e9efec] pt-32 text-[#10231e]"><div className="container-x max-w-4xl py-20"><RouteLink to={routes.home} className="eyebrow !text-emerald-800">NEXACURE PHARMA / Home</RouteLink><h1 className="mt-8 font-serif text-5xl sm:text-7xl">{page.title}</h1><p className="mt-5 text-sm text-slate-500">{page.updated}</p><div className="mt-16 space-y-12 border-t border-[#173e32]/15 pt-12">{page.sections.map(([heading, content]) => <section key={heading}><h2 className="text-xl font-medium">{heading}</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">{content}</p></section>)}</div></div></main>;
}
