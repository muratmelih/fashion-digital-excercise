/* Core */
import {
  ProductType,
  statisticsProdReportType,
  statisticsReportResult,
} from "@/app/types";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const listRes = await fetch(
    "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
  );
  const data = await listRes.json();

  const brands: string[] | unknown[] = [
    ...new Set(data.map((a: ProductType) => a.brand)),
  ];

  const lessThanForty: statisticsProdReportType[] = [];
  const totalSizes: statisticsProdReportType[] = [];
  const avgPriceFor32: statisticsProdReportType[] = [];

  brands.map((a: any) => {
    let found = data.filter(
      (prod: ProductType) =>
        prod.brand === a &&
        (prod.priceR ? Number(prod.priceR) : Number(prod.priceO) < 40)
    );
    lessThanForty.push({ brand: a, count: found.length });
    let sizeFound = data.filter((prod: ProductType) => prod.brand === a);
    let sizeArr: string[] = [];
    sizeFound.map((prod: ProductType) => {
      prod.sizes.map((size: string) => {
        if (!sizeArr.includes(size)) {
          sizeArr.push(size);
        }
      });
    });
    totalSizes.push({ brand: a, count: sizeArr.length });
    let sizes32 = data.filter(
      (prod: ProductType) => prod.brand == a && prod.sizes.includes("32")
    );
    let priceSum: number = 0;
    let avg: number = 0;
    sizes32.map((prod: ProductType) => {
      priceSum += prod.priceR ? Number(prod.priceR) : Number(prod.priceO);
    });

    if (sizes32.length) {
      avg = Number((priceSum / sizes32.length).toFixed(2));
      avgPriceFor32.push({ brand: a, count: avg });
    }
  });

  const result: statisticsReportResult = {
    lessThan40: lessThanForty.sort((a, b) => b.count - a.count),
    size32Price: avgPriceFor32.sort((a, b) => a.count - b.count),
    sizeCount: totalSizes.sort((a, b) => b.count - a.count),
  };
  return NextResponse.json(result);
}
