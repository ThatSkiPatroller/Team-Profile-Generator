const Employee = require ('./lib/employee');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/manager');
const fs = require ('fs');
const askQuestions = require('./src/inquirertemp')

const employees = [];

async function managerInfo () {
const managerAnswers = await askQuestions.askManagerQuestions();
console.log(managerAnswers);
const newManager = new Manager (managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
employees.push(newManager);
};

async function init () {
    await managerInfo();
    const employeeAnswers = await askQuestions.askEmployee();
    console.log(employeeAnswers);
    const employee = employeeAnswers.employeeType === "Engineer" ? new Engineer (employeeAnswers.employeeAnswers.name, employeeAnswers.employeeAnswers.id, employeeAnswers.employeeAnswers.email, employeeAnswers.employeeAnswers.uniqueInfo)
    : new Intern (employeeAnswers.employeeAnswers.name, employeeAnswers.employeeAnswers.id, employeeAnswers.employeeAnswers.email, employeeAnswers.employeeAnswers.uniqueInfo);
    employees.push(employee);
    console.log(employees);
};

init();
