// Questions:
// What is the team manager's name?
// What is the team manager's id?
// What is the team manager's email?
// What is the team manager's office number?
// Which type of team member would you like to add? (use arrow keys)
// What is your engineer's name?
// What is your engineer/s id?
// What is your engineer's email?
// What is your engineer's GitHub username?
const inquirer = require ('inquirer');

async function askManagerQuestions () {
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber"
    }
]
const response = await inquirer.prompt(managerQuestions);
console.log(response);
return response;
};

async function askEmployee () {
    const typeOfEmployee = await inquirer.prompt(employeeQuestions);
    console.log(typeOfEmployee.employeeType);
    const employeeAnswers = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: typeOfEmployee.employeeType === "Engineer" ? "What is the employee's Github username?" : "What is school does the employee go to?",
            name: "uniqueInfo"
        }
    ])
    return {
        employeeAnswers:employeeAnswers,
        employeeType:typeOfEmployee.employeeType
    }
};

const employeeQuestions = [
    {
        type: "list",
        message: "What type of employee are you?",
        choices: ["Engineer", "Intern"],
        name: "employeeType"
    }
]


module.exports = {
    askManagerQuestions:askManagerQuestions,
    askEmployee:askEmployee,
};
