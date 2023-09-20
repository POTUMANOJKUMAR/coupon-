// nodemailer = require("nodemailer");
const SendmailTransport = require("nodemailer/lib/sendmail-transport")
const database=require("../database/db")
const sendmail=require("../nodemailer/node")
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
const a=`this coupan ${result[0].coupan_code} is valid`
      sendmail(a)
   
 res.send("valid")
    }else{
      const b=`this coupan ${result[0].coupan_code} is invalid`
      sendmail(b)
   
        res.send("invalid")
    }
}
    
    })
}
module.exports={status}