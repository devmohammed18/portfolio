
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
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'landscape': { 'raw': '(orientation: landscape)' },
      },

      fontFamily: {
        Anton_init: ['var(--font-Anton_init)'],
        bungee: ['var(--font-bungeeinit)'],
      },

      colors: {
        bg_dark: 'hsl(240, 100%, 10%)',
        bg_light: 'hsl(240, 100%, 50%)',
      },

      screens: {
        'sm': { 'min': '320px', 'max': '640px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        'md': { 'min': '700px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'lg': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
        'xl': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
        '2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    }
  },
  plugins: [],
};
