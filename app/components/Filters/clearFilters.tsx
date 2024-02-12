"use client";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export const ClearFilters = (props: any) => {
  const router = useRouter();

  return (
    <Button
      style={{ marginLeft: "10px" }}
      onClick={() => {
        router.replace("/productList");
        props.onClear();
      }}
    >
      Clear
    </Button>
  );
};
