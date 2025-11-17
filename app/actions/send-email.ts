"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  // Validate inputs
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  try {
    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@voriq.ai",
      to: email,
      subject: "Thank you for contacting Voriq AI",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <br>
        <p>Best regards,<br>The Voriq AI Team</p>
      `,
    });

    // Send notification email to admin
    const notificationEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@voriq.ai",
      to: "shivammittal2124@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (confirmationEmail.error || notificationEmail.error) {
      console.error("Resend error:", confirmationEmail.error || notificationEmail.error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      data: { confirmationEmail: confirmationEmail.data, notificationEmail: notificationEmail.data },
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
