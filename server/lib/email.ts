import nodemailer from 'nodemailer';
import type { AuditResponse } from '@shared/schema';
import { generateAuditEmailHtml, generateAuditEmailText } from './emailTemplates';
import path from 'path';

export async function sendAuditEmail(auditData: AuditResponse): Promise<void> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.');
  }

  // Create transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: gmailUser,
      pass: gmailAppPassword.replace(/\s/g, ''), // Remove spaces from app password
    },
  });

  const companyName = auditData.company?.name || 'vašu firmu';
  const recipientEmail = auditData.email;

  // Generate email content
  const htmlContent = generateAuditEmailHtml(auditData);
  const textContent = generateAuditEmailText(auditData);

  // Load logo for email attachment
  const logoPath = path.join(process.cwd(), 'attached_assets', 'vikrea-logo-light-bg (1)_1763333330925.png');
  
  // Send email with logo attachment
  const info = await transporter.sendMail({
    from: `"ViKrea - Viera Prekopová" <${gmailUser}>`,
    to: recipientEmail,
    subject: 'Čo brzdí rast vašej firmy: tu sú vaše 3 priority',
    text: textContent,
    html: htmlContent,
    attachments: [
      {
        filename: 'vikrea-logo.png',
        path: logoPath,
        cid: 'vikrea-logo', // Content-ID for inline image reference
      },
    ],
  });

  console.log('✅ Email sent successfully:', info.messageId);
  console.log('📧 Recipient:', recipientEmail);
}

// Test email sending (for debugging)
export async function sendTestEmail(testEmail: string): Promise<void> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Gmail credentials not configured');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword.replace(/\s/g, ''),
    },
  });

  await transporter.sendMail({
    from: `"ViKrea Test" <${gmailUser}>`,
    to: testEmail,
    subject: 'Test email - ViKrea',
    text: 'This is a test email from ViKrea website. If you received this, email integration is working correctly!',
    html: '<p>This is a <strong>test email</strong> from ViKrea website.</p><p>If you received this, email integration is working correctly! ✅</p>',
  });

  console.log('✅ Test email sent to:', testEmail);
}
