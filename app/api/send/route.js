
import nodemailer from 'nodemailer'
export async function POST(request) {
    try {
     // const data = await request.json(); // Parse JSON data from the request body
      const { name, email, object, message } = await request.json();
      console.log('name:',name,"   ",'Email:',email); // Log incoming request data
  
 // Create a transporter object using SMTP transport
 const transporter = nodemailer.createTransport({

     service: 'gmail', // You can use other services like 'SendGrid', 'Mailgun', etc.
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  // Setup email data
  const mailOptions = {
    from:email , // Sender address
    to: process.env.EMAIL, // List of recipients
    name: name,
    subject: object, // Subject line
    text: message, // Plain text body
    html: `<h1>name  :${name}<h1/><br/>
           <h1>Email :${email}<h1/><br/>
           <h1>object: ${object}<h1/><br/><br/>
           <p>Message: ${message}</p>`, // HTML body content
  };

  // Send mail with defined transport object
  await transporter.sendMail(mailOptions);


      // Here you would add your email sending logic
      // For example, using a third-party service or library
  
      return new Response(
        JSON.stringify({ message: 'Email sent successfully!' }),
        { status: 200 }
      );
    } catch (error) {
      console.error('Error processing request:', error);
  
      return new Response(
        JSON.stringify({ error: 'Internal Server Error' }),
        { status: 500 }
      );
    }
  }