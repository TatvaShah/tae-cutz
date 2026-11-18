import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Taecutz",
  tagline: "Clean cuts, sharp fades and line ups in Scarborough.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Scarborough, ON",
  siteUrl: "https://tae-cutz-ca.vercel.app",

  theme: {
    preset: "barber-bold",
  },

  hero: {
    eyebrow: "Barbering in Scarborough",
    headline: "Clean cuts, sharp fades and line ups",
    subhead: "Taecutz offers kids, youth and adult cuts in Scarborough. Kids cuts are $20, youth cuts are $35, and adult cuts are $45, as posted on the Instagram bio. Send an Instagram message to book.",
    images: [
      { src: "/images/post-8.jpg", alt: "A line up with twists from Taecutz in Scarborough", width: 1080, height: 1920 },
      { src: "/images/post-5.jpg", alt: "A fade with cornrows from Taecutz in Scarborough", width: 1080, height: 1920 },
      { src: "/images/post-7.jpg", alt: "A sharp line up from Taecutz in Scarborough", width: 720, height: 960 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Kids $20, youth $35, adults $45",
    "Fades, tapers and line ups",
    "Scarborough, ON",
    "Book by Instagram DM",
  ],

  about: {
    title: "Welcome to Taecutz",
    body: [
      "Taecutz is a Scarborough barber offering clean cuts, sharp fades and line ups. Posted prices are $20 for kids, $35 for youth, and $45 for adults.",
      "Send an Instagram message to book an appointment.",
    ],
    image: { src: "/images/post-8.jpg", alt: "A line up with twists from Taecutz in Scarborough", width: 1080, height: 1920 },
  },

  menu: {
    label: "Services",
    title: "Cuts and prices",
    variant: "list",
    showPrices: true,
    groups: [
      {
        title: "Cuts",
        items: [
          { name: "Kids cut", price: "$20" },
          { name: "Youth cut", price: "$35" },
          { name: "Adult cut", price: "$45" },
        ],
      },
      {
        title: "Style",
        items: [
          { name: "Fades and tapers" },
          { name: "Line ups" },
        ],
      },
    ],
    footnote: "Prices are as posted on the Instagram bio. Send an Instagram message to book.",
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-8.jpg", width: 1080, height: 1920, alt: "A line up with twists from Taecutz in Scarborough", caption: "A line up", href: "https://www.instagram.com/reel/DfUqTjfRuav/" },
      { src: "/images/post-7.jpg", width: 720, height: 960, alt: "A sharp line up from Taecutz in Scarborough", caption: "Line ups", href: "https://www.instagram.com/p/DfUx7Ximprs/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1920, alt: "A fade with cornrows from Taecutz in Scarborough", caption: "A fade and cornrows", href: "https://www.instagram.com/reel/Dff-9zxORrs/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1920, alt: "A taper with the top left out from Taecutz in Scarborough", caption: "A taper", href: "https://www.instagram.com/reel/DfTLvqvuYJY/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "taecutzfr",
    embeds: ["https://www.instagram.com/p/DfUx7Ximprs/", "https://www.instagram.com/reel/DfUqTjfRuav/", "https://www.instagram.com/reel/Dff-9zxORrs/"],
  },

  order: {
    label: "How to book",
    headerCtaLabel: "Book now",
    title: "Book by Instagram DM",
    intro: "Send an Instagram message to book a cut in Scarborough. Kids cuts are $20, youth cuts are $35, and adult cuts are $45, as posted on the Instagram bio.",
    dmMessage: "Hi Taecutz! I would like to book a cut.\nKids, youth or adult:\nDay and time:",
    links: [
      { label: "Book by Instagram DM", href: "https://ig.me/m/taecutzfr" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram message to book a cut." },
    { q: "What are the prices?", a: "As posted on the Instagram bio, kids cuts are $20, youth cuts are $35, and adult cuts are $45." },
    { q: "Where are you based?", a: "Taecutz is in Scarborough." },
  ],

  contact: {
    title: "Contact",
    area: "Scarborough, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/taecutzfr/" },
    ],
  },

  seo: {
    title: "Taecutz | Fades and line ups in Scarborough",
    description: "Clean cuts, sharp fades and line ups in Scarborough. Kids $20, youth $35, adults $45. Book by Instagram DM.",
    keywords: ["Taecutz", "Scarborough barber", "fades Scarborough", "line ups Scarborough"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
