import Link from "next/link";
import { site, cityState } from "@/site.config";
import { BusinessDetails } from "@/components/BusinessDetails";
import { CallToAction } from "@/components/CallToAction";
import { CheckIcon, FeedIcon, SearchIcon, SparkIcon, StoreIcon, TagIcon } from "@/components/Icons";

const services = [
  {
    icon: <SearchIcon />,
    title: "Google Ads campaigns",
    body: "Search and Shopping campaigns planned around your margins, built from scratch or rebuilt from what you already have, then managed week to week.",
    points: ["Keyword and product-group structure", "Budget pacing and bid adjustments", "Monthly spend and performance summary"],
  },
  {
    icon: <StoreIcon />,
    title: "Merchant Center onboarding",
    body: "We get your Google Merchant Center account set up and in good standing, starting with the store details Google checks first.",
    points: ["Account, tax and shipping configuration", "Review of return, refund and contact pages", "Help resolving warnings and disapprovals"],
  },
  {
    icon: <FeedIcon />,
    title: "Product feed care",
    body: "Your product data is what Shopping ads are made from. We keep it clean, complete and accurate so your listings show up the way they should.",
    points: ["Titles, descriptions and categories", "Price, availability and image checks", "Ongoing fixes as your catalog changes"],
  },
];

const steps = [
  { title: "Discovery call", body: "A no-pressure conversation about your store, your products, what you've tried so far and where you want to go." },
  { title: "Proposal & agreement", body: "You get a written plan with the exact scope and monthly fee. Nothing begins until we've both signed it." },
  { title: "Launch & manage", body: "We build, launch and look after your accounts, and send you a plain-English update every month." },
];

const principles = [
  { title: "A deliberately small roster", body: "We cap how many stores we take on, so your account is handled by someone who actually knows it." },
  { title: "Reporting you can read", body: "No jargon-filled dashboards. Each month you'll see what was spent, what it produced and what we're changing next." },
  { title: "Policy-first setup", body: "We follow Google's advertising and Shopping policies from day one, because a suspended account helps nobody." },
  { title: "Your accounts stay yours", body: "Ads and Merchant Center accounts are owned by you. We work through access you grant and can remove at any time." },
];

const faqs = [
  { q: "Do you sell products?", a: `No. ${site.legalName} is a service business. We help other companies market the products they sell online. We don't run a store or sell goods ourselves.` },
  { q: "Can you guarantee my ads or Merchant Center account will be approved?", a: "No one honestly can. Google makes every approval decision. What we can promise is a careful setup that follows Google's published policies, and help with whatever Google flags." },
  { q: "How is your work billed?", a: "We bill a monthly management fee, agreed in writing before any work starts. Your advertising spend is paid directly to Google from your own account." },
  { q: "Are you part of Google?", a: `No. ${site.legalName} is an independent agency based in ${cityState}. We are not affiliated with, sponsored by or endorsed by Google.` },
  { q: "What kind of stores do you work with?", a: "Small and growing online retailers, usually on platforms like Shopify, WooCommerce or BigCommerce, that want to sell through Google Search and Shopping." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">eCommerce marketing · {cityState}</p>
            <h1>
              Put your products in front of <em>ready-to-buy</em> shoppers.
            </h1>
            <p className="hero-lead">
              {site.brand} is a hands-on marketing agency for online stores. We set up, clean up and run Google Ads,
              Google Shopping and Merchant Center so you can get back to running your business.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-amber" href="/contact">Book a free consultation</Link>
              <a className="btn btn-outline" href="#services">See our services</a>
            </div>
            <div className="hero-meta">
              <span><CheckIcon /> Written agreement before any work</span>
              <span><CheckIcon /> Simple monthly billing</span>
              <span><CheckIcon /> You keep account ownership</span>
            </div>
          </div>

          <div className="board" aria-hidden="true">
            <div className="board-top">
              <span>Store launch checklist</span>
              <span className="board-dots"><i /><i /><i /></span>
            </div>
            <div className="listing">
              <div className="listing-img"><TagIcon /></div>
              <div>
                <b>Your product listing</b>
                <small>Title · price · image · availability</small>
                <div className="bar" />
                <div className="bar short" />
              </div>
            </div>
            <ul className="checks">
              <li>Store policies published <span className="pill done">Done</span></li>
              <li>Merchant Center verified <span className="pill done">Done</span></li>
              <li>Product feed submitted <span className="pill done">Done</span></li>
              <li>Shopping campaign <span className="pill">Launching</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="At a glance">
        <div className="wrap strip-inner">
          <div><b>Google Ads</b><span>Search & Shopping campaigns</span></div>
          <div><b>Merchant Center</b><span>Setup & account health</span></div>
          <div><b>Product feeds</b><span>Clean, accurate listings</span></div>
          <div><b>Monthly reports</b><span>In plain English</span></div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">Our services</p>
              <h2>Three things, done thoroughly.</h2>
            </div>
            <p>
              We keep our focus narrow on purpose. Everything we offer helps online retailers advertise on Google
              the right way.
            </p>
          </div>
          <div className="services">
            {services.map((s) => (
              <article className="service" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <ul>
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="note">
            Good to know: we are a service provider only. {site.legalName} does not manufacture, stock or sell any
            physical or digital products.
          </p>
        </div>
      </section>

      <section className="alt" id="process">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">How it works</p>
              <h2>From first call to live campaigns.</h2>
            </div>
            <p>A straightforward path with no surprises, so you always know what happens next.</p>
          </div>
          <ol className="steps" style={{ listStyle: "none" }}>
            {steps.map((s, i) => (
              <li className="step" key={s.title}>
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">Why stores choose us</p>
              <h2>How we like to work.</h2>
            </div>
            <p>We&apos;re a young company, and we&apos;d rather earn your trust with how we work than with big promises.</p>
          </div>
          <div className="principles">
            {principles.map((p) => (
              <div className="principle" key={p.title}>
                <h3><SparkIcon /> {p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">Questions</p>
              <h2>Frequently asked.</h2>
            </div>
            <p>
              Something else on your mind? <Link href="/contact" style={{ color: "var(--green)", fontWeight: 700 }}>Send us a note</Link>.
            </p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="panel">
            <div>
              <p className="kicker">The company</p>
              <h2>Who you&apos;ll be working with.</h2>
              <p style={{ marginTop: 16 }}>
                {site.legalName} is a limited liability company headquartered in {cityState}, founded by{" "}
                {site.founder}.
              </p>
            </div>
            <BusinessDetails dark />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
