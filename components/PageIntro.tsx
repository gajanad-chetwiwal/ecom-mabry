export function PageIntro({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {children && <div className="page-intro-lead">{children}</div>}
      </div>
    </section>
  );
}
