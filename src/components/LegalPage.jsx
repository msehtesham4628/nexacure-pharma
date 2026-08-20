import RouteLink from './RouteLink';
import { routes } from '../routes';

const pages = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    updated: 'Last updated: January 2024',
    sections: [
      ['Information You Provide', 'When you use the enquiry form, you may choose to provide your name, email address, phone number, subject, and message.'],
      ['How Enquiries Are Sent', 'This website opens your email application to send an enquiry to NEXACURE PHARMA. The website does not itself store form submissions.'],
      ['How Information Is Used', 'Information you provide may be used to respond to your enquiry, clarify product or service requirements, and provide relevant customer support. We do not use enquiry details for unrelated marketing without a lawful basis or your consent.'],
      ['Data Sharing', 'We do not sell your personal information. Information may be shared only when needed to respond to your request, comply with a legal obligation, or protect the rights and safety of NEXACURE PHARMA and others.'],
      ['Data Retention and Security', 'We keep information only for as long as reasonably necessary for the purpose for which it was provided or to meet legal and operational requirements. Please avoid sending sensitive medical records or unnecessary personal information through general enquiry channels.'],
      ['WhatsApp', 'Choosing the WhatsApp contact option opens WhatsApp with a pre-filled message. Your use of WhatsApp is subject to its own privacy practices and terms.'],
      ['Your Choices', 'You may choose not to provide optional information. You can contact us to ask about personal information you have submitted or to request correction of inaccurate details, subject to applicable law.'],
      ['Contact', 'For questions about this policy, contact support@nexacurepharma.in.'],
    ],
  },
  '/terms': {
    title: 'Terms of Use',
    updated: 'Last updated: January 2024',
    sections: [
      ['Use of This Website', 'This website is provided for general information about NEXACURE PHARMA and for making enquiries.'],
      ['No Medical Advice', 'Content on this website is not medical advice and must not be used as a substitute for advice from a qualified healthcare professional.'],
      ['Acceptable Use', 'You agree to use this website lawfully and responsibly. Do not attempt to disrupt the website, access restricted areas, introduce malicious code, impersonate another person, or submit misleading, abusive, or unlawful content.'],
      ['Enquiries and Availability', 'Submitting an enquiry does not create a contract, guarantee product availability, confirm an order, or establish a healthcare provider relationship. Any purchase or service arrangement is subject to separate confirmation and applicable requirements.'],
      ['Website Content', 'Information on this website may be updated without notice. NEXACURE PHARMA does not guarantee that every item of content will always be complete, current, or available.'],
      ['Intellectual Property', 'The text, branding, graphics, and other original content on this website belong to NEXACURE PHARMA or are used with permission. You may view the content for personal, non-commercial use but may not reproduce or redistribute it without permission.'],
      ['Limitation of Responsibility', 'To the extent permitted by law, NEXACURE PHARMA is not responsible for loss arising from reliance on general website information, interruptions, technical issues, or third-party services linked from this website.'],
      ['Changes to These Terms', 'We may update these terms when the website, services, or legal requirements change. The updated version will be posted on this page with a revised date.'],
      ['Contact', 'For questions about these terms, contact support@nexacurepharma.in.'],
    ],
  },
  '/disclaimer': {
    title: 'Disclaimer',
    updated: 'Last updated: January 2024',
    sections: [
      ['General Information', 'The information on this website is provided for general informational purposes only.'],
      ['Healthcare Information', 'Nothing on this website is intended to diagnose, treat, cure, or prevent any condition, or to replace professional medical advice.'],
      ['Professional Guidance', 'Always consult a qualified doctor, pharmacist, or other healthcare professional for advice about symptoms, medicines, dosage, interactions, allergies, pregnancy, or treatment decisions. In an emergency, contact local emergency services immediately.'],
      ['Product Information', 'Product names, descriptions, images, availability, pricing, and other details may change and may not reflect current stock or conditions. Confirm important information with a qualified pharmacy professional before relying on it.'],
      ['Prescription Medicines', 'Prescription medicines should be used only as directed by an authorised healthcare professional. Do not start, stop, or change a medicine based solely on information found on this website.'],
      ['External Services', 'Email and WhatsApp links are provided for convenience. NEXACURE PHARMA is not responsible for the content, availability, or privacy practices of external services.'],
      ['No Guarantee', 'NEXACURE PHARMA does not guarantee that the website or its information will always be uninterrupted, error-free, complete, or suitable for every individual situation.'],
      ['No Reliance', 'Visitors should use their own judgement and seek appropriate professional advice where needed.'],
      ['Contact for Clarification', 'If you are unsure about information on this website, contact NEXACURE PHARMA before taking action and seek independent professional medical advice where appropriate.'],
    ],
  },
};

export function isLegalPath(path) { return Boolean(pages[path]); }

export default function LegalPage({ path }) {
  const page = pages[path];
  return <main id={path.slice(1)} className="min-h-screen bg-[#e9efec] pt-32 text-[#10231e]"><div className="container-x max-w-4xl py-20"><RouteLink to={routes.home} className="eyebrow !text-emerald-800">NEXACURE PHARMA / Home</RouteLink><h1 className="mt-8 font-serif text-5xl sm:text-7xl">{page.title}</h1><p className="mt-5 text-sm text-slate-500">{page.updated}</p><div className="mt-16 space-y-12 border-t border-[#173e32]/15 pt-12">{page.sections.map(([heading, content]) => <section key={heading}><h2 className="text-xl font-medium">{heading}</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">{content}</p></section>)}</div></div></main>;
}
