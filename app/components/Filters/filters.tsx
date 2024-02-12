"use client";

import { useState } from "react";
import { ClearFilters } from "./clearFilters";
import { PriceSort } from "./priceSort";
import { SizeFilter } from "./sizeFilter";

export const Filters = (props: any) => {
  const [clear, setClear] = useState(false);
  const onClear = () => {
    setClear(!clear);
  };
  return (
    <>
      <SizeFilter sizes={props.sizes} clear={clear}/>
      <PriceSort  />
      <ClearFilters onClear={onClear} />
    </>
  );
};
