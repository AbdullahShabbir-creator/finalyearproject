const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Set up the transporter for sending emails using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Sender's email
    pass: process.env.EMAIL_PASS   // Sender's email password
  }
});

// Send notification function
const sendNotification = (userEmail, admissionData) => {
  const adminEmail = process.env.ADMIN_EMAIL;  

  // Email options for the user
  const userMailOptions = {
    from: process.env.EMAIL_USER,  
    to: userEmail,                 
    subject: 'Admission Form Submitted Successfully',
    text: `
      Dear ${admissionData.firstName} ${admissionData.lastName},

      Your admission form has been successfully submitted.

      Your MIS ID: ${admissionData.misId}  

      Thank you for your submission!

      Best regards,
      The Admissions Team
    `
  };

  // Email options for the admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,  // Sender's email
    to: adminEmail,                // Admin's email
    subject: 'New Admission Form Submitted',
    text: `
      A new admission form has been submitted:

      Name: ${admissionData.firstName} ${admissionData.lastName}
      Class Applied For: ${admissionData.classAppliedFor}
      Age: ${admissionData.age}
      Email: ${admissionData.email}
      MIS ID: ${admissionData.misId}  

      Please review the submission.

      Best regards,
      The Admissions Team
    `
  };

  // Send email to the user
  transporter.sendMail(userMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to user:', error);
    } else {
      console.log('Email sent to user:', info.response);
    }
  });

  // Send email to the admin
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to admin:', error);
    } else {
      console.log('Email sent to admin:', info.response);
    }
  });
};

module.exports = sendNotification;
