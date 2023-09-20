nodemailer = require("nodemailer");
const database=require("../database/db")
const status=async(req,res)=>{
    const{id}=req.params
    const query1=`select start_time ,end_time ,coupan_code from  coupanDetailes where id=?`
    database.query(query1,[id],(err,result)=>{
        if(err) console.log(err)
        else if(!result[0])
    res.send("no coupan")
else{
    const newdate=new Date();
    console.log(newdate)
    if(newdate >= result[0].start_time && newdate <= result[0].end_time){
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
            text: `this coupan ${result[0].coupan_code} is valid`,
          };
          
         
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email:", error);
            } else {
              console.log("Email sent successfully:", info.response);
            }
          });
 res.send("valid")
    }else{
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
            text: `this coupan ${result[0].coupan_code} is invalid`,
          };
          
         
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email:", error);
            } else {
              console.log("Email sent successfully:", info.response);
            }
          });
        res.send("invalid")
    }
}
    
    })
}
module.exports={status}