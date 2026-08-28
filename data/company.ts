export const company = {
  name: "Shubham Enterprises",
  legalName: "Shubham Enterprises",
  tagline: "Precision surface finishing for parts that can't fail",
  shortDescription:
    "Zinc electroplating and metal surface finishing job-work for fasteners, automotive components and industrial hardware, based in Belagavi, Karnataka.",
  address: {
    line1: "PL No. 198, S. No. 354/16",
    line2: "Udyambag",
    city: "Belagavi",
    state: "Karnataka",
    postalCode: "590008",
    country: "India",
  },
  contact: {
    phone: "+91 85532 30685",
    phoneDisplay: "8553230685",
    // TODO (Phase 1 content): add a monitored business email address once available.
    email: null as string | null,
    whatsapp: "918553230685",
  },
  gstin: "29CMDPP9030J2ZM",
  stateCode: "29",
  // Approximate coordinates for Udyambag Industrial Area, Belagavi — verify exact
  // plot location and replace with precise coordinates before go-live.
  geo: {
    lat: 15.8497,
    lng: 74.4977,
  },
  social: {
    // TODO: add verified social profiles for Shubham Enterprises before launch.
    instagram: null as string | null,
  },
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const siteConfig = {
  url: "https://www.shubhamenterprises.example", // TODO: replace with production domain
  ogImage: "/og-image.png",
  keywords: [
    "zinc plating Belagavi",
    "electroplating Belgaum",
    "metal finishing Karnataka",
    "zinc electroplating job work",
    "passivation coating Belagavi",
    "fastener plating",
    "surface finishing company Belagavi",
  ],
};
