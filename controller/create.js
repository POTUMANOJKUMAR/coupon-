
const database=require("../database/db")
const create=async(req,res)=>{
    const { offer_name, coupan_code, discountpercentage, discountamount, start_time, end_time, terms_and_conditions}=req.body;
const query=`insert into  coupanDetailes( offer_name, coupan_code, discountpercentage, discountamount, start_time, end_time, terms_and_conditions) values(?,?,?,?,?,?,?)`
database.query(query,[offer_name, coupan_code, discountpercentage, discountamount, start_time, end_time, terms_and_conditions],(err,result)=>{
   console.log(result) 
   if(err) console.log(err)
    else{
res.send({message:`posted successfully`})}
})
}
module.exports={create}