const employeeController = require("../Controller/employeeController")

const router = require("express").Router()

router.post("/createemployee", employeeController.createEmployee)
router.get("/listemployee", employeeController.getAllEmployee)
router.get("/salarymorethan", employeeController.salaryMoreThan)
router.get("/expmorethan", employeeController.expMoreThan)
router.get("/graduateexperience", employeeController.graduateExperience)
router.put("/updatesalary", employeeController.updateSalary)
router.delete("/deleteemployee", employeeController.deleteEmployee)

module.exports = router



// "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json

// Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

// Query the collection ""employee"" and list all the documents
// Query the collection ""employee"" and list the employees who are having salary more than 30000
// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
// Delete all the documents from ""employee"" where last company is Y"