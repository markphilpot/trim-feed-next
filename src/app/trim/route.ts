import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const feed = request.nextUrl.searchParams.get("feed");

  if (feed) {
    const response = await fetch(feed);
    const status = response.status;
    const content = await response.text();

    return new NextResponse(content.trim().replaceAll('"//', '"https://'), {
      status,
    });
  } else {
    return new NextResponse("Missing feed parameter", {
      status: 400,
    });
  }
}
