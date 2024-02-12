/* Core */
import { ProductType } from "@/app/types";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const listRes = await fetch(
    "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
  );
  const data = await listRes.json();
  let filteredData = data;
  const sizeParam = new URL(req.url).searchParams.get("size");
  const sortParam = new URL(req.url).searchParams.get("sortPrice");

  if (sizeParam && sizeParam != "undefined") {
    const sizeParamArr = sizeParam?.split(",");
    filteredData = data.filter((a: ProductType) =>
      a.sizes.some((size: string) => sizeParamArr?.includes(size))
    );
  }

  if (sortParam && sortParam != "undefined") {
    if (sortParam == "Price Descending") {
      filteredData = filteredData.sort(
        (a: ProductType, b: ProductType) =>
          (b.priceR ? Number(b.priceR) :  Number(b.priceO)) - (a.priceR ? Number(a.priceR) : Number(a.priceO))
      );
    } else {
      filteredData = filteredData.sort(
        (a: ProductType, b: ProductType) =>
        (a.priceR ? Number(a.priceR) :  Number(a.priceO)) - (b.priceR ? Number(b.priceR) : Number(b.priceO))
      );
    }
  }
  return NextResponse.json(filteredData);
}
