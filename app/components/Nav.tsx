"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

export const Nav = () => {
  const pathname = usePathname();
  const items: MenuItem[] = [
    {
      label: "Product List",
      url: "/productList",
    },
    {
      label: "Statistics",
      url: "/statistics",
    },
  ];

  return <Menubar model={items} />;
};
