import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p>The link may be old, or the page may have moved.</p>
        <Link className="btn btn-amber" href="/">Back to home</Link>
      </div>
    </section>
  );
}
