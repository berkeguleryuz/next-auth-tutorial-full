import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "berke@clodron.com",
    to: email,
    subject: "2FA authentication",
    html: `<p>2FA code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "berke@clodron.com",
    to: email,
    subject: "Reset your password",
    html: `<p><a href="${resetLink}">Reset your password</a></p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "berke@clodron.com",
    to: email,
    subject: "Confirm your email",
    html: `<p><a href="${confirmLink}">Confirm your email</a></p>`,
  });
};
