import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  cookies();

  console.log("CALLING /api/test GET");
  return NextResponse.json({
    title: "nextjs",
    time: new Date().getTime(),
  });
}
