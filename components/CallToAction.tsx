import Link from "next/link";
import { site } from "@/site.config";

export function CallToAction() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <h2>Ready to talk about your store?</h2>
          <p>
            Share a little about your shop and where you want to take it. A real person will get back to you within{" "}
            {site.replyTime}.
          </p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-amber" href="/contact">Start the conversation</Link>
          <p>
            or call <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            <br />
            or write to <a href={`mailto:${site.email.support}`}>{site.email.support}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
