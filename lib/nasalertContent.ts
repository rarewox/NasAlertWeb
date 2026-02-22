export type NavLink = {
  label: string;
  href: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type Counter = {
  label: string;
  value: number;
  suffix: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const outcomeBullets: string[] = [
  "Faster reporting from citizens to responders.",
  "Verified updates to reduce misinformation during crises.",
  "Better coordination with visible response tracking."
];

export const howItWorksSteps: Step[] = [
  {
    title: "Citizen submits report",
    description: "A resident sends a report with category, location, and key details in seconds."
  },
  {
    title: "Verification queue",
    description: "Moderators and designated officers validate incoming reports before broad alerts."
  },
  {
    title: "Agency dispatch",
    description: "Verified incidents are routed to the relevant agency or local response desk."
  },
  {
    title: "Live status updates",
    description: "Communities receive trusted updates while response actions are underway."
  },
  {
    title: "Resolution and feedback",
    description: "Case closure, public confirmation, and feedback improve future response quality."
  }
];

export const features: Feature[] = [
  {
    title: "One-tap reporting",
    description: "Submit incidents quickly through a simple mobile-first form."
  },
  {
    title: "Location-based alerts",
    description: "Broadcast updates to affected communities by area and route."
  },
  {
    title: "Verified broadcast updates",
    description: "Only verified alerts are pushed widely to build trust and clarity."
  },
  {
    title: "Anonymous tips",
    description: "Allow safe reporting options for sensitive community intelligence."
  },
  {
    title: "Response routing to agencies",
    description: "Automatically route incidents to security, emergency, or health contacts."
  },
  {
    title: "Admin dashboard",
    description: "Monitor incoming incidents, status changes, and area hotspots."
  },
  {
    title: "Analytics and reporting",
    description: "Track response trends, categories, and operational performance over time."
  },
  {
    title: "Audit trail and history",
    description: "Maintain transparent records from first report to final resolution."
  }
];

export const useCases: UseCase[] = [
  {
    title: "Security and community safety",
    description: "Capture neighborhood security alerts and coordinate timely intervention."
  },
  {
    title: "Road accidents and traffic incidents",
    description: "Report crashes, blocked roads, and hazards with rapid location tagging."
  },
  {
    title: "Flood and disaster alerts",
    description: "Notify affected residents and response partners during flood or weather events."
  },
  {
    title: "Missing persons",
    description: "Circulate verified missing-person notices across trusted local channels."
  },
  {
    title: "Public health emergencies",
    description: "Distribute urgent verified information during outbreaks or local health incidents."
  }
];

export const impactCounters: Counter[] = [
  { label: "Communities covered", value: 24, suffix: "+" },
  { label: "Reports received", value: 12000, suffix: "+" },
  { label: "Response partners", value: 35, suffix: "+" },
  { label: "Avg response time target", value: 15, suffix: " mins" }
];

export const faqs: Faq[] = [
  {
    question: "Is it free for citizens?",
    answer: "Yes. Citizen reporting is designed to stay accessible so communities can raise alerts quickly."
  },
  {
    question: "How are reports verified?",
    answer:
      "Reports enter a verification queue where moderators and authorized response partners confirm details before mass updates."
  },
  {
    question: "What happens after reporting?",
    answer:
      "Verified reports are routed to the relevant agency, then status updates are shared until closure."
  },
  {
    question: "Can I report anonymously?",
    answer:
      "Yes. Anonymous reporting can be enabled for sensitive cases while preserving incident quality checks."
  },
  {
    question: "How can LGAs or agencies onboard?",
    answer:
      "Use the partner deployment channel in the contact section to request onboarding and response workflow setup."
  }
];
