export const site = {
  name: "Public Ritual",
  tagline: "The dance floor is a public ritual.",
  location: "Austin, Texas",
  origin: "Born in Austin. Made for everywhere.",
  description:
    "Independent electronic music label and cultural platform based in Austin, Texas — built around a simple belief: the dance floor is a public ritual.",
};

export const nav = [
  { href: "/artists", label: "Artists" },
  { href: "/releases", label: "Releases" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
] as const;

export const pillars = [
  {
    key: "music",
    title: "Music",
    copy: "Discovering and developing forward-thinking producers and DJs. Releases that live beyond the record — house, electronic, and the spaces in between.",
  },
  {
    key: "events",
    title: "Events",
    copy: "Nights built for gathering. Live experiences that extend the catalog onto the floor — nightlife, travel, and the shared act of moving together.",
  },
  {
    key: "culture",
    title: "Culture",
    copy: "Visual language, merchandise, and global collaborations. A home for distinct identities and an evolving community around creativity and freedom.",
  },
] as const;

export const artist = {
  slug: "lucien-varelli",
  name: "Lucien Varelli",
  role: "Artist · DJ · Producer",
  handle: "@Lucienvarelli",
  origin: "Austin, Texas",
  signed: "Public Ritual",
  bio: "Lucien Varelli is the first artist signed to Public Ritual. A producer and DJ rooted in house and electronic music, his work is built for the floor — patient, physical, and designed to hold a room.",
  statement:
    "The label exists to give artists with distinct identities a home. Lucien is the opening chapter: sound that belongs to the night, and to the people who gather inside it.",
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/lucienvarelli",
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/search/Lucien%20Varelli",
    },
    {
      label: "SoundCloud",
      href: "https://soundcloud.com/lucienvarelli",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@lucienvarelli",
    },
  ],
} as const;

export const forthcomingRelease = {
  catalog: "PR001",
  title: "Forthcoming",
  artist: "Lucien Varelli",
  format: "Digital · Vinyl TBA",
  status: "In transmission",
};

export const inquiryOptions = [
  { value: "general", label: "General" },
  { value: "booking", label: "Booking" },
  { value: "press", label: "Press" },
  { value: "demos", label: "Demos" },
  { value: "collaboration", label: "Collaboration" },
] as const;
