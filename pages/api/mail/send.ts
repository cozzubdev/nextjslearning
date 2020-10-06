import { NextApiRequest, NextApiResponse } from 'next';

import { createTransport } from 'nodemailer';

import { ContactFormValues } from 'components/about/contact/contact-form/type';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { email, subject, message } = req.body as ContactFormValues;

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_EMAIL,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
    return console.log('Email sent!!!');
  });
};
