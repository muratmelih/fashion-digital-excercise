/* Core */
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const listRes = await fetch(
    "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
  );
  const data = await listRes.json();
  console.log("req", new URL(req.url).searchParams.get("size"));

  return NextResponse.json(data);
}
