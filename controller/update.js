const database=require("../database/db")
const update=(req,res)=>{
    const id=req.params;
    const{name,coupan}=req.body
    query1=`UPDATE coupanDetailes SET offer_name = ?, coupan_code = ? WHERE id = ?;`
    database.query(query1,[name,coupan,id],(err,result)=>{
        if(err) res.send(err)
        else{
    res.send("updated succsfully")}
    })
}
module.exports={update}