import { NextRequest, NextResponse } from "next/server";

// Example GET method
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Users endpoint" });
}
