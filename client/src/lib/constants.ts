export const TESTIMONIALS = [
  {
    quote:
      "iConcepts has been a trusted partner in our growth. Their understanding of media planning and creative execution is exceptional.",
    author: "Kathiresan",
    title: "Director",
    company: "Fitness One",
  },
  {
    quote:
      "Professional, reliable and results-driven, iConcepts delivered our campaigns with precision and accountability across all channels.",
    author: "Chairman",
    title: "",
    company: "Apollo Group of Colleges",
  },
  {
    quote:
      "Their integrated approach to advertising — from creative to media to on-ground execution — made our campaigns seamless and effective.",
    author: "Sudeesh Nair",
    title: "",
    company: "Tata Value Homes",
  },
];

export const ATL_SERVICES = [
  "Newspaper Ads",
  "Magazine Ads",
  "TV Commercials",
  "Radio Spots",
  "Outdoor & Hoardings",
];

export const BTL_SERVICES = [
  "Ad Bike",
  "Auto Stickers",
  "Bus Stickers",
  "Bus Shelter Ads",
  "Club Activities",
  "Flute Board",
  "Mall Activities",
  "Hoardings",
  "Lookwalkers",
  "Sand Art",
  "Banners",
  "Paper Inserts",
  "Airport Activations",
  "Toll Activations",
];

export const CREATIVE_SERVICES = [
  "Brand Strategy",
  "Campaign Ideation",
  "Print Design",
  "Visual Identity",
  "Communication Design",
];

export const NEWSPAPER_PARTNERS: { name: string; logo: string }[] = [
  { name: "The Hindu", logo: "/logos/the-hindu.svg" },
  { name: "Times of India", logo: "/logos/times-of-india.png" },
  { name: "Deccan Chronicle", logo: "/logos/deccan-chronicle.png" },
  { name: "The New Indian Express", logo: "/logos/the-new-indian-express.jpg" },
  { name: "Dinamalar", logo: "/logos/dinamalar.png" },
  { name: "Dinakaran", logo: "/logos/dinakaran.webp" },
  { name: "Daily Thanthi", logo: "/logos/daily-thanthi.jpg" },
  { name: "Dinamani", logo: "/logos/dinamani.jpg" },
  { name: "The Economic Times", logo: "/logos/the-economic-times.png" },
  { name: "Hindustan Times", logo: "/logos/hindustan-times.png" },
  { name: "The Indian Express", logo: "/logos/the-indian-express.svg" },
];

export const CLIENT_PARTNER_SEGMENTS: { title: string; logos: string[] }[] = [
  {
    title: "Real Estate",
    logos: [
      "/logos/partners/Web-logo-01.png",
      "/logos/partners/Web-logo-03.png",
      "/logos/partners/Web-logo-02.png",
      "/logos/partners/Web-logo-04.png",
      "/logos/partners/Web-logo-05.png",
      "/logos/partners/Web-logo-14.png",
      "/logos/partners/Web-logo-08.png",
      "/logos/partners/Web-logo-06.png",
      "/logos/partners/Web-logo-13.png",
      "/logos/partners/Web-logo-15.png",
      "/logos/partners/Web-logo-07.png",
      "/logos/partners/casagrand.png",
      "/logos/partners/G square.png",
      "text:Propfair",
      "/logos/partners/Web-logo-11.png",
      "/logos/partners/Web-logo-17.png",
      "/logos/partners/Web-logo-16.png",
      "/logos/partners/Web-logo-09.png",
      "/logos/partners/Web-logo-12.png",
      "/logos/partners/Web-logo-18.png",
      "/logos/partners/Web-logo-10.png",
    ],
  },
  {
    title: "Banking",
    logos: ["/logos/partners/Infra-logo-06.jpg"],
  },
  {
    title: "Healthcare",
    logos: [
      "/logos/partners/Health-care-04.jpg",
      "/logos/partners/Health-care-01.jpg",
      "/logos/partners/Health-care-05.jpg",
      "/logos/partners/Health-care-03.jpg",
      "/logos/partners/Health-care-02.jpg",
    ],
  },
  {
    title: "Infrastructure",
    logos: [
      "/logos/partners/Infra-logo-02.jpg",
      "/logos/partners/Infra-logo-01.jpg",
      "/logos/partners/Infra-logo-04.jpg",
      "/logos/partners/Infra-logo-03.jpg",
      "/logos/partners/Infra-logo-11.jpg",
    ],
  },
  {
    title: "Others",
    logos: [
      "/logos/partners/Infra-logo-08.jpg",
      "/logos/partners/Infra-logo-13.jpg",
      "/logos/partners/Infra-logo-12.jpg",
      "/logos/partners/Infra-logo-14.jpg",
      "/logos/partners/Web-logo-2-03.png",
      "/logos/partners/Web-logo-2-02.png",
      "/logos/partners/Web-logo-2-01.png",
      "/logos/partners/Web-logo-2-04.png",
    ],
  },
];

export type MediaAssetShowcaseItem = {
  title: string;
  client: string;
  channel: string;
  format: string;
  image: string;
  proofPdf?: string;
};

export const MEDIA_ASSET_SHOWCASE: MediaAssetShowcaseItem[] = [
  {
    title: "Baashyaam Enchanted Full-Page Release",
    client: "Baashyaam",
    channel: "The Hindu",
    format: "Print Ad",
    image: "/media-assets/baashyam-ad-the-hindu.jpg",
    proofPdf: "/media-assets/baashyam-ad-the-hindu.pdf",
  },
  {
    title: "Baashyaam Enchanted - Tamil Edition",
    client: "Baashyaam",
    channel: "Daily Thanthi",
    format: "Print Ad",
    image: "/media-assets/chennai-24-bhas-1.jpg",
    proofPdf: "/media-assets/chennai-24-bhas-1.pdf",
  },
  {
    title: "Kochar Jewel - Premium Positioning Creative",
    client: "Kochar Homes",
    channel: "Regional Print",
    format: "Creative Artwork",
    image: "/media-assets/kochar-jewel-print.jpg",
  },
  {
    title: "Baashyaam Campaign Visual - Times of India",
    client: "Baashyaam",
    channel: "Times of India",
    format: "Print Creative",
    image: "/media-assets/baashyaam-timesofindia-print.jpg",
  },
  {
    title: "Ocean - Brand Poster Communication",
    client: "Ocean",
    channel: "Corporate Print",
    format: "Brand Creative",
    image: "/media-assets/ocean-brand-poster.jpg",
  },
  {
    title: "Tata Value Homes - Bus Shelter Branding",
    client: "Tata Value Homes",
    channel: "Outdoor",
    format: "BTL / Transit",
    image: "/media-assets/tata-value-homes-bus-shelter.jpg",
  },
  {
    title: "The Hindu Website - Desktop Placement Proof",
    client: "Baashyaam",
    channel: "thehindu.com",
    format: "Digital Placement",
    image: "/media-assets/the-hindu-desktop-ad-placement.jpg",
  },
  {
    title: "The Hindu Website - Mobile Placement Proof",
    client: "Baashyaam",
    channel: "thehindu.com",
    format: "Digital Placement",
    image: "/media-assets/the-hindu-mobile-ad-placement.jpg",
  },
];

export const STATS = [
  { value: 19, suffix: "+", label: "Years" },
  { value: 40, suffix: "+", label: "Clients" },
  { value: 360, suffix: "°", label: "Campaigns" },
];

export const SIGNATURE_ORBIT_TEXT =
  "INS ACCREDITED • DIPR EMPANELLED • EST. 2007 • 360° AGENCY • ";
