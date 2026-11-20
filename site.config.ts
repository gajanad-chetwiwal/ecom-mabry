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

  url: "https://ecom-mabry.com", // TODO: your production domain

  phone: {
    display: "+1 (555) 010-0000", // TODO: your phone number
    tel: "+15550100000", // TODO: same number, digits only with country code
  },

  email: {
    support: "support@ecom-mabry.com", // TODO: support inbox (contact form sends here)
    management: "owner@ecom-mabry.com", // TODO: management / owner inbox
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
