const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String,
})

module.exports = mongoose.model("employee", employeeSchema)