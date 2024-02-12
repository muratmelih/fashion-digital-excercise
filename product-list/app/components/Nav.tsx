"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/productList">Product List</Link>
      <Link href="/statistics">Statistics</Link>
    </nav>
  );
};

