"use client";

import { useState } from "react";
import { site } from "@/site.config";

type Status = { kind: "idle" | "sending" | "ok" | "err" };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      // FormSubmit forwards the message to the support inbox. The very first
      // submission triggers a one-time activation email to that inbox.
      const res = await fetch(`https://formsubmit.co/ajax/${site.email.support}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New website inquiry for ${site.legalName}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ kind: "ok" });
    } catch {
      setStatus({ kind: "err" });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email address *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="store">Store website</label>
          <input id="store" name="store" placeholder="yourshop.com" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">I&apos;m interested in</label>
        <select id="topic" name="topic" defaultValue="Not sure yet">
          <option>Google Ads management</option>
          <option>Merchant Center setup</option>
          <option>Product feed help</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">How can we help? *</label>
        <textarea id="message" name="message" required />
      </div>
      <input className="hp" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" className="btn btn-amber" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
      <p className="form-fine">
        By sending this form you agree to our <a href="/privacy">Privacy Policy</a>. We only use your details to
        reply to you.
      </p>
      <p className={`form-status${status.kind === "ok" ? " ok" : status.kind === "err" ? " err" : ""}`} role="status" aria-live="polite">
        {status.kind === "ok" && `Thanks, your message is on its way. We'll be in touch within ${site.replyTime}.`}
        {status.kind === "err" && (
          <>
            We couldn&apos;t send that just now. Please email <a href={`mailto:${site.email.support}`}>{site.email.support}</a> instead.
          </>
        )}
      </p>
    </form>
  );
}
