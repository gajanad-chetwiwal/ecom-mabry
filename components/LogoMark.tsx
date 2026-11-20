export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="var(--ink)" />
      <path d="M17 24h30l-2.6 24.5a3 3 0 0 1-3 2.5H22.6a3 3 0 0 1-3-2.5z" fill="none" stroke="var(--paper)" strokeWidth="4" strokeLinejoin="round" />
      <path d="M25 24v-3a7 7 0 0 1 14 0v3" fill="none" stroke="var(--paper)" strokeWidth="4" strokeLinecap="round" />
      <path d="M24.5 42.5l6-6 4 4 6.5-7" fill="none" stroke="var(--amber)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
