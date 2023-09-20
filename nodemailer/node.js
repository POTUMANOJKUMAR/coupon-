nodemailer = require("nodemailer");
function sendmail(text){
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "potumanojkumar86@gmail.com",
      pass: "xupy jqyq phuv yxvz",
    },
  });
  const mailOptions = {
    from: "potumanojkumar86@gmai.com",
    to: "potugangamanojkumardoodleblue@gmail.com",
    subject: "Hello from Node.js",
    text: text
  };
  

 
  
 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  })}
  module.exports = sendmail