const employee = {name: "Jer", StreetAddress : "12th"}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const noob = {...employee}
    noob[key] = value
    return noob
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const noob = {...employee};
    delete noob[key]
    return noob
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}