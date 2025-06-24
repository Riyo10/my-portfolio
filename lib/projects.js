export const projectList = [
  {
    slug: "metal-bengal",
    title: "Metal Bengal",
    description: "Premium stainless steel, iron, and aluminum products for residential and commercial use.",
    images: ["/metalbengal1_1.png", "/metalbengal1_2.png", "/metalbengal1_3.png", "/metalbengal1_4.png"],
    demoLink: "https://www.metalbengal.com",
    repoLink: null,
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "SEO Optimization"],
  },
  {
    slug: "swapnochura",
    title: "Swapnochura",
    description: "An NGO empowering communities through sustainable development, education, and social justice initiatives worldwide.",
    images: ["/sopnochura1_1.png", "/sopnochura1_2.png", "/sopnochura1_3.png"],
    demoLink: "https://www.swapnachura.in",
    repoLink: null,
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "SEO Optimization", "Database Integration", "Firebase"],
  },
      {
    slug: "event-registration",
    title: "Event Registration",
    description: "A platform for registering yourself for events organized by the Sponsor, that data directly goes to the sponsor's google sheets.",
    images: ["/event-registration1_1.png", "/event-registration1_2.png",],
    demoLink: "https://event-registration-iota.vercel.app/",
    repoLink: "https://github.com/Riyo10/Event-Registration",
    skills: ["Next.js", "Tailwind CSS", "Google Sheets", "Responsive Design",],
  },
    {
    slug: "Loan-Buddy",
    title: "Your Loan Buddy",
    description: "A comprehensive platform for providing users with tools to track, calculate, and optimize their loan repayments.",
    images: ["/loanbuddy1_1.png", "/loanbuddy1_2.png", "/loanbuddy1_3.png"],
    demoLink: "https://loanbuddy-gray.vercel.app/",
    repoLink: "https://github.com/Riyo10/loanbuddy",
    skills: ["Next.js", "Tailwind CSS", "Chart.js", "Responsive Design",],
  },
];

export function getProjectBySlug(slug) {
  return projectList.find((project) => project.slug === slug);
}
