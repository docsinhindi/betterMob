
import nodemailer from 'nodemailer';


export async function POST(request : Request){
  const form = await request.json();
  
  const { name, gmail, feedback } = form;
  if (!name || !gmail) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_EMAIL, // your email user
            pass: process.env.NEXT_PUBLIC_SMTP_PASS, // your email password
        },
    });
     // Set up email data with unicode symbols
     let mailOptions = {
      from: `"Better Mobility"`, // sender address
      to: process.env.NEXT_PUBLIC_SMTP_EMAIL, // list of receivers
      subject: "New Contact Form Recieved", // Subject line
      text: `Name: ${name}\nEmail: ${gmail}\nFeedback: ${feedback}`, // plain text body
      html: `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h2 style="background-color: #f2f2f2; padding: 10px 20px; text-align: center; border-radius: 8px;">Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${gmail}</p>
      <p><strong>Feedback:</strong></p>
      <p style="background-color: #f9f9f9; padding: 10px; border-radius: 8px;">${feedback}</p>
      <footer style="margin-top: 20px; text-align: center; color: #888;">
          <p>Thank you for reaching out!</p>
      </footer>
  </div>`, // html body
  };

  // Send mail with defined transport object
  await transporter.sendMail(mailOptions);

  return new Response("Email sent successfully")
} catch (error: any) {
  return new Response("Failed to send email", { status: 500 });
}

}



// const saveData = (data: any) => {
//   const filePath = path.join(process.cwd(), 'src', 'data', 'submissions.json');


//   // Ensure the directory exists
//   if (!fs.existsSync(path.dirname(filePath))) {
//     fs.mkdirSync(path.dirname(filePath), { recursive: true });
//   }

//   // Read existing data
//   let submissions = [];
//   if (fs.existsSync(filePath)) {
//     const fileData = fs.readFileSync(filePath, 'utf8');
//     submissions = JSON.parse(fileData);
//   }

//   // Add the new submission
//   submissions.push(data);

//   // Write the updated data back to the file
//   fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
// };




// export async function POST(request : Request){
//   const form = await request.json();
  
//   const { name, gmail, feedback } = form;
//   if (!name || !gmail || !feedback) {
//     return new Response("All fields are required", { status: 400 });
//   }
//   try {
//     saveData({ name, gmail, feedback });
//   } catch (error) {
//     console.error('Error saving data:', error);
//     return new Response("Failed to save data", { status: 500 });
//   }
  
//   console.log(form);

//   return new Response("Form submitted successfully!")
// }