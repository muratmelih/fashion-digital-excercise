"use client";

import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const PriceSort = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<string | null>("");
  const options = ["Price Ascending", "Price Descending"];
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  useEffect(() => {
    if (current.has("sortPrice")) {
      setSelectedSort(current.get("sortPrice"));
    }
    else{
        setSelectedSort('');
    }
  }, [current]);
  const handleChange = (e: any) => {
    setSelectedSort(e.value);
    e.value.length
      ? current.set("sortPrice", e.target.value)
      : current.delete("sortPrice");
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };
  return (
    <Dropdown
      value={selectedSort}
      onChange={handleChange}
      options={options}
      placeholder="Sort by ..."
      style={{ width: "300px", marginLeft: "15px" }}
    />
  );
};
