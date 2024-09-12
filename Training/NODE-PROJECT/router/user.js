const express = require("express");
const middleWare1= require("../middleware/middleware1")

//we can also destructure usercontroller by replacing it with [getUsers , createUsers , updateUsers , deleteUsers]
const usercontroller= require("../controller/user")
const router = express.Router();
router.get("/user",middleWare1,usercontroller.getUsers);
router.post("/user",usercontroller.createUsers);

router.put("/user/:id",usercontroller.updateUsers);

router.delete("/user/:id",usercontroller.deleteUsers);

module.exports = router;