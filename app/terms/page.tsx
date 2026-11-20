import type { Metadata } from "next";
import { site, addressOneLine } from "@/site.config";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${site.legalName} website.`,
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <>
      <PageIntro kicker="Policies" title="Terms of Service">
        <p>Effective {site.legalUpdated}</p>
      </PageIntro>
      <section>
        <div className="wrap legal prose">
          <h2>1. Acceptance of these terms</h2>
          <p>
            This website is operated by {site.legalName}, {addressOneLine}. By browsing or using it, you accept
            these terms. Any services we provide to clients are covered by a separate written agreement signed by
            both parties, and that agreement takes precedence where the two differ.
          </p>

          <h2>2. Our services</h2>
          <p>
            {site.legalName} is a marketing services company. We offer Google Ads campaign management, Google
            Merchant Center setup and support, and product feed management for businesses that sell online. Fees
            are charged monthly as stated in each client agreement. We do not sell physical or digital products.
          </p>

          <h2>3. Results are not guaranteed</h2>
          <p>
            Google LLC alone decides whether accounts, products and ads are approved, and advertising performance
            depends on many factors outside our control, including market conditions and the client&apos;s own
            website and products. We therefore make no guarantee of any particular approval, ranking, traffic or
            sales outcome.
          </p>

          <h2>4. Independence from Google</h2>
          <p>
            Google, Google Ads and Google Merchant Center are trademarks of Google LLC. {site.legalName} is an
            independent business and is not affiliated with, sponsored by or endorsed by Google.
          </p>

          <h2>5. Use of this website</h2>
          <p>
            You agree not to misuse this website, interfere with its operation or attempt to access it in ways
            other than through the interface we provide. Information on this site is for general purposes and may
            change without notice.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            The text, design, logo and other content on this website belong to {site.legalName}. Deliverables
            created for a client are owned as set out in that client&apos;s agreement.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the fullest extent allowed by law, {site.legalName} will not be liable for any indirect, incidental,
            special or consequential losses arising from your use of, or inability to use, this website.
          </p>

          <h2>8. Governing law</h2>
          <p>These terms are governed by the laws of the State of Texas, USA.</p>

          <h2>9. Questions</h2>
          <p>
            Contact us at <a href={`mailto:${site.email.support}`}>{site.email.support}</a> or{" "}
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
