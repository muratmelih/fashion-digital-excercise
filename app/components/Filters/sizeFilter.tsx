"use client";

import { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SizeFilter = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedSize, setSelectedSize] = useState<string[] | undefined>([]);
  const { sizes } = props;
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  useEffect(() => {
    if (current.has("sizes")) {
      setSelectedSize(current.get("sizes")?.split(","));
    } else {
      setSelectedSize([]);
    }
  }, []);

  useEffect(() => {
    setSelectedSize([]);
  }, [props.clear]);
  const handleChange = (e: any) => {
    setSelectedSize(e.value);
    e.value.length
      ? current.set("sizes", e.target.value)
      : current.delete("sizes");
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };
  return (
    <MultiSelect
      value={selectedSize}
      onChange={handleChange}
      options={sizes}
      filter
      placeholder="Select Size"
      maxSelectedLabels={5}
      style={{ width: "300px" }}
    />
  );
};
