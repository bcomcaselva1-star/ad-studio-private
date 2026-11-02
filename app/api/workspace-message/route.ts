import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const message = String(form.get("message") ?? "").trim();
  if (!message) return NextResponse.json({ error: "Message is required." }, { status: 400 });
  // Provider integration intentionally not enabled until the owner configures API credentials.
  // Keep provider keys server-side. Do not expose them to client components.
  return NextResponse.json({
    status: "provider_not_configured",
    message: "Your task was received by the workspace foundation. Configure an AI provider on the server to enable responses.",
    receivedLength: message.length
  }, { status: 501 });
}
