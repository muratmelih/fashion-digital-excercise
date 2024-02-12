/* Core */
import { ProductType } from "@/app/types";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const listRes = await fetch(
    "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
  );
  const data = await listRes.json();

  const sizes: string[] = [];
  data.map((a: ProductType) => {
    a.sizes.map((size: string) => {
      if (!sizes.includes(size)) sizes.push(size);
    });
  });

  return NextResponse.json(sizes);
}
