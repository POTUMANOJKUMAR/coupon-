const express=require("express")
const router=express.Router()
const functi=require("../controller/create")
const functi1=require("../controller/status")
 const functi2 =require("../controller/get")
const functi3=require("../controller/update")

router.get("/get/:id",functi2.get)
router.post("/create",functi.create)
router.get("/status/:id",functi1.status)
router.put("/update/:id",functi3.update)
router.get("/getAll",functi2.getAll)
router.delete("/delete/:id",functi2.del)








module.exports=router