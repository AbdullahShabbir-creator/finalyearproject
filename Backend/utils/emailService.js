const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Configure the Nodemailer transporter using only authentication credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to any SMTP service if needed
  auth: {
    user: process.env.EMAIL_USER, // Gmail address used for authentication (sending from other email addresses is allowed)
    pass: process.env.EMAIL_PASS   // App password (if using Gmail)
  }
});

// Function to send notification to both the admin and user
const sendNotification = (userEmail, admissionData) => {
  // Notification email for the user (sender's email is user's email)
  const userMailOptions = {
    from: userEmail,  // Dynamic sender address from user
    to: userEmail,    // Receiver address (user's email from the form)
    subject: 'Admission Form Submitted Successfully',
    text: `
      Dear ${admissionData.firstName} ${admissionData.lastName},

      Your admission form has been successfully submitted.

      Thank you for your submission!

      Best regards,
      The Admissions Team
    `
  };

  // Notification email for the admin
  const adminMailOptions = {
    from: userEmail,  // Dynamic sender address from user
    to: process.env.ADMIN_EMAIL, // Admin's email
    subject: 'New Admission Form Submitted',
    text: `
      A new admission form has been submitted:

      Name: ${admissionData.firstName} ${admissionData.lastName}
      Class Applied For: ${admissionData.classAppliedFor}
      Age: ${admissionData.age}
      Email: ${admissionData.email}

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
