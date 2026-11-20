import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { site } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600"], style: ["normal", "italic"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });

const description = `${site.legalName} is a Houston, Texas marketing agency that builds and runs Google Ads, Google Shopping and Merchant Center programs for eCommerce brands.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | Google Shopping & Ads Partner for Online Retailers`,
    template: `%s | ${site.brand}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.brand} | Google Shopping & Ads Partner for Online Retailers`,
    description,
    url: "/",
    siteName: site.brand,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { themeColor: "#123a2f" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email.support,
  telephone: site.phone.tel,
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
