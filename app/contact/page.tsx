import type { Metadata } from "next";
import { site } from "@/site.config";
import { PageIntro } from "@/components/PageIntro";
import { BusinessDetails } from "@/components/BusinessDetails";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.legalName}. Call ${site.phone.display}, email ${site.email.support} or send us a message.`,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageIntro kicker="Contact" title="Let's talk about your store.">
        <p>Phone, email or the form below all reach us directly. Expect a reply within {site.replyTime}.</p>
      </PageIntro>

      <section>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: "1.7rem", marginBottom: 18 }}>How to reach us</h2>
            <BusinessDetails />
          </div>
          <div className="card-box">
            <h2 style={{ fontSize: "1.7rem", marginBottom: 8 }}>Send a message</h2>
            <p style={{ marginBottom: 24 }}>Tell us a bit about your business and what you need help with.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
