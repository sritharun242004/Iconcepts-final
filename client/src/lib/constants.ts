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
  "Radio Jingles",
  "Outdoor & Hoardings",
];

export const BTL_SERVICES = [
  "Outdoor Hoardings",
  "Bus Branding",
  "Bus Shelter",
  "LED Screening",
  "Digital Truck",
  "Vehicle Branding",
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
      "sm:/logos/partners/G square.png",
      "text:Propfair",
      "/logos/partners/Web-logo-11.png",
      "/logos/partners/Web-logo-17.png",
      "/logos/partners/Web-logo-16.png",
      "/logos/partners/Web-logo-09.png",
      "/logos/partners/Web-logo-12.png",
      "/logos/partners/Web-logo-10.png",
      "sm:/logos/ARPUDHAM%20Logo.jpg",
      "md:/logos/Athulya.jpg",
      "sm:/logos/Bloom%20Logo%20Open%20file-01.jpg",
      "xs:/logos/Breeze%20logo%20final-01.jpg",
      "sm:/logos/Gagan%20logo-01.jpg",
      "sm:/logos/Jewel%20logo-01.jpg",
      "sm:/logos/Radha.jpg",
      "sm:/logos/S%20logo%20Final_v1.jpg%20(1).jpeg",
      "sm:/logos/Silversky%20logo.jpg",
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
    title: "Kochar Jewel - Premium Positioning Creative",
    client: "Kochar Homes",
    channel: "Regional Print",
    format: "Creative Artwork",
    image: "/media-assets/kochar-jewel-print.jpg",
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
  {
    title: "Adroit Abode - Just a Few for the Discerning Few",
    client: "Adroit Urban Developers",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/adroit/WhatsApp%20Image%202026-03-25%20at%2014.24.58%20(1).jpeg",
  },
  {
    title: "Adroit Abode - You Have Arrived",
    client: "Adroit Urban Developers",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/adroit/WhatsApp%20Image%202026-03-25%20at%2014.24.58%20(2).jpeg",
  },
  {
    title: "Adroit Abode - You Have Arrived (Variant)",
    client: "Adroit Urban Developers",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/adroit/WhatsApp%20Image%202026-03-25%20at%2014.24.59%20(3).jpeg",
  },
  {
    title: "Bhaggyam Athulya - Welcome to an Abode of Peace",
    client: "Bhaggyam Constructions",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/baagyam/WhatsApp%20Image%202026-03-25%20at%2014.24.54.jpeg",
  },
  {
    title: "Bhaggyam Athulya - Ultra Luxury 3 BHK Homes",
    client: "Bhaggyam Constructions",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/baagyam/athulya.jpeg",
  },
  {
    title: "Bora Teak Meadows - Gift Your Child a Royal Future",
    client: "Bora Housing",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/bora/WhatsApp%20Image%202026-03-25%20at%2014.24.56%20(1).jpeg",
  },
  {
    title: "Bora Teak Meadows - Pre-Launch Offer",
    client: "Bora Housing",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/bora/WhatsApp%20Image%202026-03-25%20at%2014.24.57.jpeg",
  },
  {
    title: "Hiranandani Parks Tierra - Own One Ground of Villa Plot",
    client: "Hiranandani Communities",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/hiran/WhatsApp%20Image%202026-03-25%20at%2014.24.59%20(1).jpeg",
  },
  {
    title: "Hiranandani Parks Tierra - Ask for a Plot, Receive Fine Living",
    client: "Hiranandani Communities",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/hiran/WhatsApp%20Image%202026-03-25%20at%2014.24.59.jpeg",
  },
  {
    title: "Kochar Gagan - The Perfect Destination to Call Home",
    client: "Kochar Homes",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/kochar/WhatsApp%20Image%202026-03-25%20at%2014.24.52%20(1).jpeg",
  },
  {
    title: "Kochar Gagan - Write a New Life Story",
    client: "Kochar Homes",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/kochar/WhatsApp%20Image%202026-03-25%20at%2014.24.52.jpeg",
  },
  {
    title: "Lancor Lumina - Ready to Move, Ready-to-Cook Kitchen",
    client: "Lancor",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/lancor/WhatsApp%20Image%202026-03-25%20at%2014.25.00%20(1).jpeg",
  },
  {
    title: "Lancor Lumina - Smiles to 300+ Families",
    client: "Lancor",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/lancor/WhatsApp%20Image%202026-03-25%20at%2014.25.00.jpeg",
  },
  {
    title: "Olympia Opaline - Limited Collection, Unlimited Possibilities",
    client: "Olympia Group",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/olympia/WhatsApp%20Image%202026-03-25%20at%2014.24.54%20(2).jpeg",
  },
  {
    title: "Olympia Goodwood Residence - Your Iconic Image Meets Its Perfect Match",
    client: "Olympia Group",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/olympia/WhatsApp%20Image%202026-03-25%20at%2014.24.55%20(1).jpeg",
  },
  {
    title: "Olympia Mithila - Nalla Neram Vandachu!",
    client: "Olympia Group",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/olympia/WhatsApp%20Image%202026-03-25%20at%2014.24.55.jpeg",
  },
  {
    title: "Ramaniyam Manasa - World-Class Living at the Heart of the City",
    client: "Ramaniyam",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/ramniyam/WhatsApp%20Image%202026-03-25%20at%2014.24.55%20(2).jpeg",
  },
  {
    title: "Ramaniyam Manasa - Elevate Your Lifestyle to the Gold Standard",
    client: "Ramaniyam",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/ramniyam/WhatsApp%20Image%202026-03-25%20at%2014.24.56.jpeg",
  },
  {
    title: "Silversky Lakeside 3 - Premium Lifestyle Unga Budget La!",
    client: "Silversky Builders",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/silversky/WhatsApp%20Image%202026-03-25%20at%2014.24.53.jpeg",
  },
  {
    title: "Silversky Lakeside 3 - Ready for Fitout Homes",
    client: "Silversky Builders",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/silversky/WhatsApp%20Image%202026-03-25%20at%2014.24.53%20(1).jpeg",
  },
  {
    title: "Silversky - Double Jackplot! Two Prime Locations",
    client: "Silversky Builders",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/silversky/WhatsApp%20Image%202026-03-25%20at%2014.24.53%20(2).jpeg",
  },
  {
    title: "Tata New Haven Ribbon Walk - Zero is the New Hero",
    client: "Tata Value Homes",
    channel: "Digital",
    format: "Digital Ad",
    image: "/media-assets/tata/WhatsApp%20Image%202026-03-25%20at%2014.24.57%20(1).jpeg",
  },
  {
    title: "Tata New Haven Ribbon Walk - Moments of Happiness Everyday",
    client: "Tata Value Homes",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/tata/WhatsApp%20Image%202026-03-25%20at%2014.24.57%20(2).jpeg",
  },
  {
    title: "TVS Emerald Lighthouse - Luxury Living at Pallavaram",
    client: "TVS Emerald",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/WhatsApp%20Image%202026-03-25%20at%2014.24.58.jpeg",
  },
  {
    title: "Asta Arise - Uber Rich Luxury Living in Style",
    client: "Asta Properties",
    channel: "Regional Print",
    format: "Print Ad",
    image: "/media-assets/WhatsApp%20Image%202026-03-25%20at%2014.24.59%20(2).jpeg",
  },
];

export const STATS = [
  { value: 19, suffix: "+", label: "Years" },
  { value: 40, suffix: "+", label: "Clients" },
  { value: 360, suffix: "°", label: "Campaigns" },
];

export const SIGNATURE_ORBIT_TEXT =
  "INS ACCREDITED • DIPR EMPANELLED • EST. 2007 • 360° AGENCY • ";
