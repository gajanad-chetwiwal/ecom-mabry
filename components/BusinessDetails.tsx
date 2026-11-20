import { site } from "@/site.config";

export function BusinessDetails({ dark = false }: { dark?: boolean }) {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "Registered name", value: site.legalName },
    { label: site.founderTitle, value: site.founder },
    {
      label: "Office address",
      value: (
        <>
          {site.address.street}
          <br />
          {site.address.city}, {site.address.region} {site.address.postalCode}, {site.address.country}
        </>
      ),
    },
    { label: "Phone", value: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> },
    { label: "Email", value: <a href={`mailto:${site.email.support}`}>{site.email.support}</a> },
    ...(site.email.management !== site.email.support
      ? [{ label: "Management", value: <a href={`mailto:${site.email.management}`}>{site.email.management}</a> }]
      : []),
    { label: "Office hours", value: site.hours },
  ];
  return (
    <dl className={`details${dark ? " details-dark" : ""}`}>
      {rows.map((r) => (
        <div key={r.label}>
          <dt>{r.label}</dt>
          <dd>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
