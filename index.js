// Write your solution in this file!

const employee = {
    name : 'Sam',
    address : '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object as a clone of the original employee
    const newEmployee = {...employee};

    // Update the specific key with the new value
    newEmployee[key] = value;

    // Return the updated employee object
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const newEmployee = {...employee};
    
    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
}