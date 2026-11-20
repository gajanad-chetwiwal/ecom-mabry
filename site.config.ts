/**
 * ─────────────────────────────────────────────────────────────
 *  ALL BUSINESS DETAILS LIVE HERE.
 *  Edit this one file and every page (header, footer, contact,
 *  legal pages, structured data) updates automatically.
 *
 *  Values marked TODO are placeholders — replace before launch.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  brand: "Ecom Mabry", // public-facing name
  brandParts: ["Ecom", "Mabry"] as const, // how the logo wordmark is split
  legalName: "ECOMMABRY LLC",
  founder: "Mabry Ann Henslee",
  founderTitle: "Founder",

  url: "https://ecommarby.com",

  phone: {
    display: "+1 (984) 403-8320",
    tel: "+19844038320",
  },

  email: {
    support: "ceo@ecommarby.com", // contact form sends here
    management: "ceo@ecommarby.com",
  },

  address: {
    street: "511 Hidden Harbor St",
    city: "Houston",
    region: "TX",
    postalCode: "77079",
    country: "USA",
    countryCode: "US",
  },

  hours: "Monday – Friday, 9am – 5pm CT",
  replyTime: "one business day",
  legalUpdated: "November 2026",
} as const;

export const addressOneLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, ${site.address.country}`;
export const cityState = `${site.address.city}, ${site.address.region}`;
