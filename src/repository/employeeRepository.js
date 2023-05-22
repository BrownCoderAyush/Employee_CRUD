const { Employee } = require('../models/index.js');
const EmergencyContact = require('./emergencyContactRepository.js');


class EmployeeRepository {
    constructor(){
        this.employeeEContact = new EmergencyContact();
    }
    async create(data) {
        try {
            const employee = await Employee.create({
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
                jobTitle: data.jobTitle,
                address: data.address,
                city: data.city,
                state: data.state
            });
            const EmergencyContactsCreate = [{...data.emergencyContacts[0],employeeId : employee.id} , {...data.emergencyContacts[1] , employeeId : employee.id}];
            const EmergencyContact = await this.employeeEContact.bulkCreate(EmergencyContactsCreate);

            return {...employee.dataValues , emergencycontacts : EmergencyContact};
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

    async delete(Id) {
        try {
            await Employee.destroy({
                where: {
                    id: Id
                }
            }
            )
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

    async update(id , data){
        try {
            
            await Employee.update(data,{ where: { id: id } });
            const updatedEmployee = await this.findById(id);
            return updatedEmployee;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

    async findById(Id) {
        try {
            const employee = await Employee.findByPk(Id);
            const contacts = await employee.getEmergencyContacts();
            return {...employee.dataValues , contacts : contacts};
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

    async getAll(offset , limit ){
        try {
            offset = parseInt(offset);
            limit = parseInt(limit);
            const employees = await Employee.findAll({offset : offset ,  limit : limit});
            return employees;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }

   


}

module.exports = EmployeeRepository;