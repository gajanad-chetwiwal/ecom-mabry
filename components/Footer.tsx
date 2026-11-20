import Link from "next/link";
import { site, addressOneLine } from "@/site.config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              {site.legalName} is an independent marketing agency helping online retailers advertise on Google
              Search and Google Shopping.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Policies</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href={`tel:${site.phone.tel}`}>{site.phone.display}</a></li>
              <li><a href={`mailto:${site.email.support}`}>{site.email.support}</a></li>
              <li>{addressOneLine}</li>
            </ul>
          </div>
        </div>
        <p className="footer-note">
          Google, Google Ads and Google Merchant Center are trademarks of Google LLC. {site.legalName} operates
          independently and is not affiliated with, sponsored by, or endorsed by Google.
        </p>
        <div className="footer-base">
          <span>© {year} {site.legalName}. All rights reserved.</span>
          <span>{addressOneLine}</span>
        </div>
      </div>
    </footer>
  );
}
