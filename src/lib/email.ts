import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.EMAIL_SERVER,
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmailtoAdmin = async (email: string, subject: string, message: string) => {
  const reciverMail = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_ADMIN,
    subject,
    html: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(reciverMail);

    return { success: true };
  } catch {
    return { success: false, error: 'Failed to send email' };
  }
};

export const sendEmailtoUser = async (to: string, firstName: string, lastName: string) => {
  const reciverMail = {
    from: process.env.EMAIL_FROM,
    to,
    subject: 'Thank you for getting in touch!',
    html: `
        <p style="font-family: Arial, sans-serif; color: #333; font-size: 16px; line-height: 1.5;">
          Hello ${firstName.toUpperCase()} ${lastName.toUpperCase()},<br><br>
          Thank you for reaching out to me. This email is sent to you to confirm that I have received your message, 
          and I will get back to you as soon as possible.<br><br>
          Yours truly,<br>
          Dharyl
        </p>`,
  };

  try {
    await transporter.sendMail(reciverMail);

    return { success: true };
  } catch {
    return { success: false, error: 'Failed to send email' };
  }
};
