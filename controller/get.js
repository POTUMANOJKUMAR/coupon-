const database=require("../database/db")
const get=(req,res)=>{
    const id=req.params;
    query1=`select * from coupanDetailes where id=?`
    database.query(query1,[id],(err,result)=>{
        if(err) res.send(err)
        else{
    res.send(result)}
    })
}
const getAll=(req,res)=>{
    const id=req.params;
    query1=`select * from coupanDetailes `
    database.query(query1,[id],(err,result)=>{
        if(err) res.send(err)
        else{
    res.send(result)}
    })
}
const del=(req,res)=>{
    const id=req.params;
    query1=`DELETE FROM coupanDetailes
    WHERE id =?; `
    database.query(query1,[id],(err,result)=>{
        if(err) res.send(err)
        else{
    res.send(`delected succesfully`)}
    })
}



module.exports={get,getAll,del}