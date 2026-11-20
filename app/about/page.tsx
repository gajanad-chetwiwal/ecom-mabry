import type { Metadata } from "next";
import { site, cityState } from "@/site.config";
import { PageIntro } from "@/components/PageIntro";
import { BusinessDetails } from "@/components/BusinessDetails";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${site.legalName}, a ${cityState} agency founded by ${site.founder} to help online stores advertise on Google.`,
  alternates: { canonical: "/about" },
};

const initials = site.founder.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("");

export default function About() {
  return (
    <>
      <PageIntro kicker="About us" title={`The story behind ${site.brand}.`}>
        <p>
          We&apos;re a focused marketing agency in {cityState} that helps independent online retailers reach customers
          through Google Search and Google Shopping.
        </p>
      </PageIntro>

      <section>
        <div className="wrap split">
          <div className="prose">
            <h2>Why we started</h2>
            <p>
              Plenty of good online stores never get the visibility they deserve. Often that&apos;s because Google
              Ads and Merchant Center can feel complicated, slow and unforgiving when you&apos;re also running
              everything else in the business.
            </p>
            <p>
              {site.brand} exists to take that weight off your shoulders. We handle the technical setup, keep product
              data in order and manage campaigns carefully, and we explain everything in language that makes sense.
            </p>
            <h2>What to expect from us</h2>
            <ul>
              <li>Direct contact with the people doing the work, not a rotating account team.</li>
              <li>A written agreement that spells out scope and monthly pricing before we begin.</li>
              <li>Setups that follow Google&apos;s advertising and Shopping policies.</li>
              <li>Honest monthly updates, including what didn&apos;t work.</li>
            </ul>
            <h2>Small on purpose</h2>
            <p>
              We&apos;re a new company and we intend to stay selective. Keeping our client list short means every
              store gets real attention rather than a template.
            </p>
          </div>

          <aside className="card-box">
            <p className="kicker">Business information</p>
            <BusinessDetails />
            <div className="founder">
              <div className="founder-mark" aria-hidden="true">{initials}</div>
              <div>
                <b>{site.founder}</b>
                <span>{site.founderTitle}, {site.legalName}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
