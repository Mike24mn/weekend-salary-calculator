const employees = [
    firstName = '',
    lastName = '',
    idNumber = '',
    jobTitle = '',
    annualSalary = ''
]

function handleSubmit(event) {
    console.log('handle submit works...')
    event.preventDefault()
    let firstNameInput = document.getElementById('firstName').value
    let lastNameInput = document.getElementById('lastName').value
    let idInput = document.getElementById('identity').value
    let titleInput = document.getElementById('title').value
    let annualSalaryInput = document.getElementById('annualSalary').value
    let messageOutput = document.getElementById('messages')
    console.log(`incoming information: ${firstNameInput},  ${lastNameInput}, ${idInput}, ${annualSalaryInput}`)
    if (firstNameInput.length > 0 && lastNameInput.length > 0 && idInput.length > 0 && titleInput.length > 0 && annualSalaryInput.length > 0) {
        {
            let tableInfusion = document.getElementById("containerLocation")
            tableInfusion.innerHTML += `<tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>
    <td><button onClick="deleteSubmission(event)">Delete</button></td>
  </tr>
  `
        }

    }



else { 
    messageOutput.innerHTML = "* Missing information, please ensure all fields are filled out prior to submission" 
} // FIX THIS, MESSAGE NOT APPEARING

    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("identity").value = ""
    document.getElementById("title").value = ""
    document.getElementById("annualSalary").value = ""
}

function addEmployeeInfo() {
    console.log("Employee info works");
}

function deleteSubmission(event) {
    console.log('deleteSubmission works')
    console.log(event)
    let thisColumn = event.target.parentElement.parentElement
    let deleteTableRow = event.target.parentElement.parentElement // Targets parent parent element
    thisColumn.remove()
}




///* This application should have a form with five inputs that collect a 
//new employee's *first name, last name, ID number, job title, annual salary*.
//