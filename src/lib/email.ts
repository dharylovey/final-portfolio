import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'admin@dharyl.tech',
    pass: 'edt1WPuw8pTS',
  },
});

export const sendEmailtoAdmin = async (
  email: string,
  subject: string,
  message: string,
  firstName: string,
  lastName: string,
) => {
  const reciverMail = {
    from: process.env.EMAIL_ZOHO_FROM,
    to: process.env.EMAIL_FROM,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <p style="font-size: 16px; margin-bottom: 20px;">
          Hello Dharyl,<br><br>
          <span style="font-size: 16px; line-height: 1.6;">
            ${message}
          </span>
        </p>
  
        <p style="font-size: 16px; margin-top: 20px;">
          Yours truly,<br>
          <strong style="font-size: 18px; color: #000;">${firstName.toUpperCase()} ${lastName.toUpperCase()}</strong><br>
          <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a>
        </p>
      </div>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(reciverMail);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Failed to send email' };
  }
};

export const sendEmailtoUser = async (to: string, firstName: string, lastName: string) => {
  const reciverMail = {
    from: process.env.EMAIL_ZOHO_FROM,
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
    replyTo: process.env.EMAIL_FROM,
  };

  try {
    await transporter.sendMail(reciverMail);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Failed to send email' };
  }
};
