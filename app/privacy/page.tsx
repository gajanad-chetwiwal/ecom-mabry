import type { Metadata } from "next";
import { site, addressOneLine } from "@/site.config";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  const mail = <a href={`mailto:${site.email.support}`}>{site.email.support}</a>;
  return (
    <>
      <PageIntro kicker="Policies" title="Privacy Policy">
        <p>Effective {site.legalUpdated}</p>
      </PageIntro>
      <section>
        <div className="wrap legal prose">
          <h2>Overview</h2>
          <p>
            This policy describes how {site.legalName} (&ldquo;{site.brand}&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;
            or &ldquo;us&rdquo;), located at {addressOneLine}, handles personal information gathered through this
            website and in the course of delivering our marketing services.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Information you send us:</strong> your name, email address, and optionally your phone number, store website and the contents of your message when you use our contact form, email or call us.</li>
            <li><strong>Basic technical information:</strong> data your browser shares automatically, such as device type, browser version and the pages you view, used to keep the site working properly.</li>
          </ul>

          <h2>How we use it</h2>
          <p>
            We use your information to answer your inquiry and, if you become a client, to deliver and administer
            the services described in our agreement with you. We never sell, rent or trade your personal information
            to anyone.
          </p>

          <h2>Client account information</h2>
          <p>
            Clients may give us access to accounts such as Google Ads, Google Merchant Center or analytics tools.
            We access and use that information only to manage, improve and report on those accounts for that
            client. We keep it confidential and do not disclose it to third parties without the client&apos;s written
            permission, except where required by law.
          </p>

          <h2>Service providers</h2>
          <p>
            We rely on a small number of trusted providers to operate, such as website hosting and a form-delivery
            service that forwards contact form messages to our inbox. They may process limited information on our
            behalf, solely to provide those functions.
          </p>

          <h2>Retention and security</h2>
          <p>
            We keep personal information only as long as it&apos;s needed for the purposes above or to meet legal,
            tax and accounting requirements. Access is limited to people who need it to do their work, and we use
            reasonable safeguards to protect it.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask to see, correct or delete the personal information we hold about you at any time by
            emailing {mail}. We&apos;ll respond within a reasonable timeframe.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The effective date at the top of the page shows when it
            was last revised.
          </p>

          <h2>Contact</h2>
          <p>
            {site.legalName}, {addressOneLine}. Phone: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
            Email: {mail}.
          </p>
        </div>
      </section>
    </>
  );
}
