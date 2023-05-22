const employeeService = require('../services/employeeService.js');
const EmployeeService = new employeeService();

const create = async (req, res) => {
    try {
        const employee = await EmployeeService.create(req.body);
        return res.status(201).json({
            success : true , 
            response : employee,
            err : {} , 
            message:'Employee created successfully'
        });
    } catch (error) {
        return res.status(400).json({
            err : error,
            message: 'Something went wrong'
        });
    }
}

// const getAll = async (req, res) => {
//     try {
//         const employees = await employeeService.getAll(req.query.offset,req.query.limit);
//         return res.status(201).json({
//             employees,
//             message:'Employees fetched successfully'
//         });
//     } catch (error) {
//         return res.status(400).json({
//             error,
//             message: 'Something went wrong'
//         });
//     }
// }

const destroy = async (req, res) => {
    try {
        const response = await EmployeeService.delete(req.params.id);
        return res.status(201).json({
            success : true , 
            err : {} , 
            response : response,
            message:'Employee deleted successfully'
        });
    } catch (error) {
        return res.status(400).json({

            err : error,
            message: 'Something went wrong'
        });
    }
}

const get = async (req, res) => {
    try {
        const employee = await EmployeeService.getById(req.params.id);
        return res.status(201).json({
            success : true , 
            response : employee,
            err : {} , 
            message:'Employee fetched successfully'
        });
    } catch (error) {
        return res.status(400).json({
            err : error,
            message: 'Something went wrong'
        });
    }
}
const update = async (req, res) => {
    try {
        const employee = await EmployeeService.update(req.params.id,req.body);
        return res.status(201).json({
            success : true , 
            err : {} , 
            response : employee,
            message:'Employee updated successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}

const getAll = async (req, res) => {
    try {
        const employee = await EmployeeService.getAll(req.query.offset,req.query.limit);
        return res.status(201).json({
            success : true , 
            err : {} , 
            response : employee,
            message:'Employees with given limit and offset are fetched successfully'
        });
    } catch (error) {
        return res.status(400).json({
            error,
            message: 'Something went wrong'
        });
    }
}
module.exports = {
    create,
    getAll,
    destroy,
    get,
    update
}

