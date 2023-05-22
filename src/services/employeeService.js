const EmployeeRepository = require("../repository/employeeRepository.js");


class EmployeeService {
    constructor(){
        this.employeeRepository = new EmployeeRepository();
    }
    async createCity(data){
        try {
            const employeeData = await this.employeeRepository.create(data);
            return employeeData;     
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};
        }
        
    }
    async delete(Id){
        try {
            await this.employeeRepository.delete(Id);
            return {message : "Deleted Successfully"};
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};
        }
    }
    async update(Id,data){
        try {
            const response = await this.employeeRepository.update(cityId,data);
            return response;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};
        }
    }
    async getById(Id){
        try {
            const response = await this.employeeRepository.findById(Id);
            return response;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw {error};
        }
    }
    
    
}

module.exports=EmployeeService;
