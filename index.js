// Write your solution in this file!


let employee = {
    name: "Elsie Wanjihia",
    streetAddress : "Nairobi"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
   const updatedEmployee = {...employee}
   updatedEmployee[key] = value
   return updatedEmployee
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
}


function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }




function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
