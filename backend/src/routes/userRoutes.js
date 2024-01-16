const router=require("express").Router()
const userControllers=require("./../controllers/userControllers")

router.get("/api",userControllers.getData)
router.post("/api",userControllers.postData)
router.delete("/api/:id",userControllers.deleteData)

module.exports = router;