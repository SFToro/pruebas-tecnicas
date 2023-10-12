"use client";
import { usePathname, useSearchParams } from "next/navigation";

function Breadcrumb() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return <small style={{ color: "red" }}>{pathname}</small>;
}

export default Breadcrumb;
