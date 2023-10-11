const employeeModel = require("../Models/employeeModel")
const Data = require("../Data")

const createEmployee = async (req, res) =>{
    try {
        const result = await employeeModel.create(Data)
        res.status(200).send({msg: "All Employee created", result})
    } catch (error) {
        res.status(500).send({msg: "Employee list not created"})   
    }
}

const getAllEmployee = async (req, res) =>{
    try {
        const result = await employeeModel.find()
        res.status(200).send({msg: "Founded the list of employee", result})
    } catch (error) {
        res.status(500).send({msg: "Not founded the list of employee"})
    }
}

const salaryMoreThan = async (req, res) =>{
    try {
        const result = await employeeModel.find({salary: {$gt: '30000'}})
        res.status(200).send({msg: "Employee having salary more than 30000", result})
    } catch (error) {
        res.status(500).send({msg: "Not get the result of employee having salary more than 30000"})   
    }
}

const expMoreThan = async (req, res) =>{
    try {
        const result = await employeeModel.find({overallExp: {$gt: '2'}})
        res.status(200).send({msg: "Employee having experience more than 2 years"})
    } catch (error) {
        res.status(500).send({msg: "Not get the result of employee having experience more than 2 years"})
    }
}

const graduateExperience = async (req, res) =>{
    try {
        const result = await employeeModel.find({yearGrad: {$gt: '2015'}, overallExp: {$gt: '1'}})
        res.status(200).send({msg: "founded the employee who are graduated after 2015 and having experience more than 1 year", result})
    } catch (error) {
        res.status(500).send({msg: "Not found the employee"})   
    }
}

const updateSalary = async (req, res) =>{
    try {
        const result = await employeeModel.updateMany({salary: {$gt: '70000'}}, {$set: {salary: '65000'}}, {new: true})
        res.status(200).send({msg: "Updated the salary of employee", result})
    } catch (error) {
        res.status(500).send({msg: "Not updated the salary"})
    }
}

const deleteEmployee = async (req, res) =>{
    try {
        const result = await employeeModel.deleteMany({lastCompany: "Y"})
        res.status(200).send({msg: "Successfully deleted the employee having lastCompay: Y", result})
    } catch (error) {
        res.status(500).send({msg: "Not deleted the employee"})        
    }
}

module.exports = {createEmployee, getAllEmployee, salaryMoreThan, expMoreThan, graduateExperience, updateSalary, deleteEmployee}