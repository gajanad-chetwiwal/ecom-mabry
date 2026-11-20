import Link from "next/link";
import { site } from "@/site.config";
import { LogoMark } from "./LogoMark";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo${light ? " logo-light" : ""}`} aria-label={`${site.brand} home`}>
      <LogoMark />
      <span>
        {site.brandParts[0]}
        <em>{site.brandParts[1]}</em>
      </span>
    </Link>
  );
}
