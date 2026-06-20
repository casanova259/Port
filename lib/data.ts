// Content for the portfolio. Edit freely.
//
// Sections that need live data (GitHub activity, status, view counter, etc.)
// are marked TODO and currently render static/sample values.

export const profile = {
  name: "Manik Sharma",
  badge: "Rejected by Y Combinator", // small pill above the name
  role: "", // TODO: add your title — leave empty to hide this line
  taglines: [
    "Building with React & Next.js.",
    "Real-time, collaborative, fast.",
    "Always learning.",
  ],
  status: "Idle · last active 2h ago", // TODO: wire to a real presence source
  views: 12480, // TODO: wire to an analytics/view-count source
};

export const about = [
  "I'm a Computer Science student building full-stack web apps — from internal dashboards to real-time collaborative tools.",
  "I work mostly in React and Next.js, with a focus on clean architecture, performance, and details that make products feel fast.",
  "Recent projects span hotel management dashboards, a Miro-style collaborative whiteboard, and a high-performance product landing page.",
];

export const links = [
  // TODO: add your GitHub profile link
  { label: "LinkedIn", href: "https://linkedin.com/in/manik-sharma-312664283" },
  { label: "Mail", href: "mailto:maniksharma79886@gmail.com" },
  { label: "Resume", href: "/resume.pdf" }, // TODO: drop a resume.pdf into /public
];

export type ProjectItem = {
  name: string;
  year: string;
  description: string[];
  href?: string;
  tags: string[];
};

export const projects: ProjectItem[] = [
  {
    name: "The Wild Oasis — Hotel Management Dashboard",
    year: "2026",
    href: "https://the-wild-oasis-mu-six.vercel.app/login",
    description: [
      "Full-featured internal SPA for cabin, booking, and guest management with employee-only auth and role-based access via Supabase.",
      "Real-time dashboard with dynamic stats for the last 7/30/90 days — bookings, sales, check-ins, and occupancy rate — visualised with Recharts.",
      "Complete booking lifecycle: check-in/check-out flows, payment confirmation, breakfast add-ons, and status filtering.",
      "Full dark mode with system preference detection, persistent sessions, and configurable app settings.",
    ],
    tags: ["React (Vite)", "React Query", "React Router", "Styled Components", "Supabase", "Recharts"],
  },
  {
    name: "Boardy — Real-Time Collaborative Whiteboard",
    year: "2026",
    href: "https://miro-jade.vercel.app/",
    description: [
      "Real-time collaborative whiteboard with multi-user live presence and synchronised canvas state, powered by Liveblocks.io and Convex.",
      "Full drawing toolkit — text, sticky notes, rectangles, ellipses, freehand pencil — with keyboard shortcuts for a fast workflow.",
      "Secure auth via Clerk and a type-safe component architecture in TypeScript with Next.js.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Liveblocks.io", "Clerk", "Convex"],
  },
  {
    name: "Spylt — Protein Shake Product Landing Page",
    year: "2024",
    href: "https://makmad.vercel.app/",
    description: [
      "High-performance landing page with GSAP SplitText animations, parallax scrolling, and a horizontal-scroll section across 6 product flavours.",
      "92/100 Lighthouse, 95/100 Accessibility, 100/100 Best Practices — through efficient DOM manipulation, lazy loading, and semantic HTML.",
    ],
    tags: ["React", "GSAP", "Tailwind CSS", "Vercel"],
  },
];

export type EducationItem = {
  school: string;
  href?: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    school: "IKG Punjab Technical University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    start: "2023",
    end: "Present",
    note: "Semester CGPA: 8.47, 8.85, 9.00, 8.86, 8.79",
  },
];

export const certifications = [
  "Scaler Topics — SQL Fundamentals",
  "Scaler Topics — Operating System Fundamentals",
  "Complete Web Development — 55.5-hour full-stack course",
];

export const quote = {
  text: "I was not born with a whole lot of natural talent... but I work hard and I never give up.",
  author: "Rock Lee",
};
