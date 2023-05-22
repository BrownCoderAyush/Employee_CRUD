const express = require("express");

const employeeController = require('../../controller/employeeController.js');

const router = express.Router();

router.post('/employees' , employeeController.create);
router.get('/employees/:id' , employeeController.get);
router.delete('/employees/:id' , employeeController.destroy);
router.patch('/employees/:id' , employeeController.update);
router.get('/employees' , employeeController.getAll);

module.exports = router;    