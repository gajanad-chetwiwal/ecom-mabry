type P = { size?: number };
const base = (size: number) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
});

export const SearchIcon = ({ size = 26 }: P) => (
  <svg {...base(size)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /><path d="M8 11.5l2 2 3.5-4" /></svg>
);
export const StoreIcon = ({ size = 26 }: P) => (
  <svg {...base(size)}><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M5 12v8h14v-8" /><path d="M10 20v-5h4v5" /></svg>
);
export const FeedIcon = ({ size = 26 }: P) => (
  <svg {...base(size)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 13h8M8 16h5" /></svg>
);
export const CheckIcon = ({ size = 16 }: P) => (
  <svg {...base(size)} strokeWidth={2.4}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const SparkIcon = ({ size = 22 }: P) => (
  <svg {...base(size)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);
export const TagIcon = ({ size = 34 }: P) => (
  <svg {...base(size)}><path d="M3 12V4h8l10 10-8 8z" /><circle cx="8" cy="8" r="1.6" /></svg>
);
