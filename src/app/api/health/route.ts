import { NextResponse } from "next/server";

export async function GET() {
  const env = process.env.NEXT_PRIVATE_SERVER_URL;

  return NextResponse.json(
    { env, message: "API is up and running." },
    {
      status: 200,
    }
  );
}
