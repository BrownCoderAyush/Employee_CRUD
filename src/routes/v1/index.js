const express = require("express");

const employeeController = require('../../controller/employeeController.js');

const router = express.Router();

router.post('/create' , employeeController.create);
router.get('/get/:id' , employeeController.get);
router.delete('/delete/:id' , employeeController.destroy);
router.patch('/update/:id' , employeeController.update);
router.get('/getAll' , employeeController.getAll);

module.exports = router;    