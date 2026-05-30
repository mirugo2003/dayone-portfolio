// ─────────────────────────────────────────────────────────────────────────────
// YOUR PROJECTS DATA
// Add your LaunchPad sites and MVP Sprint projects here.
// Each project object follows the schema below.
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    type: "launchpad",          // "launchpad" | "mvp"
    title: "Maison Cardamom",
    tagline: "Brand site for an artisan bakery — 3x weekly orders after launch.",
    description: "A full brand identity and website for an artisan bakery. Clean, editorial design with online booking and Google Business integration. Delivered in 6 days.",
    tags: ["Branding", "E-commerce", "SEO"],
    liveUrl: "https://example.com",   // link to the live site
    imageUrl: null,                   // optional: "/images/maison-cardamom.jpg"
    year: "2025",
    highlight: "3× orders",
  },
  {
    id: 2,
    type: "mvp",
    title: "Pulse Analytics",
    tagline: "B2B SaaS dashboard launched in 19 days.",
    description: "Full-stack analytics dashboard for a B2B SaaS startup. React frontend, Node API, Postgres DB. Auth, billing via Stripe, and role-based access control — all shipped in 3 weeks.",
    tags: ["React", "Node.js", "SaaS", "Stripe"],
    liveUrl: "https://example.com",
    imageUrl: null,
    year: "2025",
    highlight: "19 days",
  },
  {
    id: 3,
    type: "launchpad",
    title: "Noir & Co.",
    tagline: "Editorial e-commerce for a fashion label.",
    description: "High-end editorial website for an emerging fashion brand. Full Shopify integration, lookbook gallery, and mobile-first performance optimisation.",
    tags: ["Shopify", "Editorial", "Fashion"],
    liveUrl: "https://example.com",
    imageUrl: null,
    year: "2024",
    highlight: null,
  },
  {
    id: 4,
    type: "mvp",
    title: "Stride Fit",
    tagline: "Mobile-first training app, now at 12k MAU.",
    description: "A progressive web app for personalised fitness coaching. Workout plans, progress tracking, and coach messaging. Built in 3 weeks and now serving 12,000 monthly active users.",
    tags: ["PWA", "React", "Fitness", "Supabase"],
    liveUrl: "https://example.com",
    imageUrl: null,
    year: "2024",
    highlight: "12k MAU",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW PROJECT
//
// Copy this template and add it to the projects array above:
//
// {
//   id: 5,                                // increment the id
//   type: "launchpad",                    // "launchpad" or "mvp"
//   title: "Your Project Name",
//   tagline: "One punchy line.",
//   description: "Full description shown on hover/expand.",
//   tags: ["Tag1", "Tag2"],
//   liveUrl: "https://yoursite.com",
//   imageUrl: "/images/your-image.jpg",   // put images in /public/images/
//   year: "2025",
//   highlight: "Key stat",               // or null if none
// },
// ─────────────────────────────────────────────────────────────────────────────
