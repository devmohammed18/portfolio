import nodemailer from 'nodemailer';

export async function POST(request) {
    
  try {
    const { name, email, object, message } = await request.json();

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like 'SendGrid', 'Mailgun', etc.
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Setup email data
    const mailOptions = {
      from: email, // Sender address
      to: process.env.EMAIL, // List of recipients
      name: name,
      subject: object, // Subject line
      text: message, // Plain text body
      html: `<p>${message}</p>`, // HTML body content
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
