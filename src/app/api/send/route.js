import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // 1. Get data from the form
    const { email, subject, message } = await req.json();

    // 2. Send the email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL, 
      to: [process.env.NOTIFICATION_EMAIL], // Sends to kai@xfgnx.com (hidden from user)
      replyTo: email, // If you hit 'Reply' in your inbox, it goes to the customer
      subject: subject || "New Inquiry from Owl Studios",
      react: (
        <div>
          <h1>New Message: {subject}</h1>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </div>
      ),
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("System Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
