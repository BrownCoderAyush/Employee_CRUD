const { EmergencyContact } = require('../models/index.js');


class EmergencyCRepository {

    async create(data) {
        try {
            const employeeContact = await EmergencyContact.create(data);
            return employeeContact;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async delete(Id) {
        try {
            await EmergencyContact.destroy({
                where: {
                    id: Id
                }
            }
            )
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    async bulkCreate(data){
        try {
            const emergencyContacts = await EmergencyContact.bulkCreate(data);
            return emergencyContacts;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async findById(Id) {
        try {
            const employeeContact = await EmergencyContact.findByPk(Id);
            return employeeContact;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = EmergencyCRepository;