import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { to, subject, body } = await request.json();

  if (!to || !subject || !body) {
    return NextResponse.json(
      { success: false, message: "بيانات ناقصة لإرسال البريد." },
      { status: 400 }
    );
  }

  console.log("رسالة Gmail جديدة", { to, subject, body });

  return NextResponse.json({ success: true });
}
