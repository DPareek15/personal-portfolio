import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const { name, email, message }: FormDataType = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    const finalMessage: string =
      name.length === 0
        ? message.concat(`\nSent by ${email}`)
        : message.concat(`\nSent by ${name} (${email})`);

    const transportConfig: EmailConfig = {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(transportConfig);

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      cc: email,
      subject: 'New message from contact form',
      text: finalMessage,
    };

    const mailPromise = (): Promise<string> =>
      new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error: Error | null) => {
          if (!error) {
            resolve('Email sent!');
          } else {
            reject(error);
          }
        });
      });

    await mailPromise();
    return NextResponse.json(
      {
        message: 'Email sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
