//* Real-life scenario
// Suppose you are developing an Employee Management System for a manufacturing company.
// For example, a garments factory or a manufacturing company has hundreds of employees.
//* Each employee has:
// - Employee ID
// - Employee Name
// - Designation
// - Department
// - Monthly Salary
// - Working Days
// The company needs to calculate employee salaries and display employee information.
class Employee {
    employeeId;
    employeeName;
    employeeDesignation;
    employeeDepartment;
    employeeMonthlySalary;
    constructor(employeeId, employeeName, employeeDesignation, employeeDepartment, employeeMonthlySalary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeDesignation = employeeDesignation;
        this.employeeDepartment = employeeDepartment;
        this.employeeMonthlySalary = employeeMonthlySalary;
    }
    //* Method 01: Display Employee Informatiotn
    displayEmployeeInformation() {
        console.log("Employee Information");
        console.log("====================");
        console.log(`Employee Id : ${this.employeeId}`);
        console.log(`Employee Name" ${this.employeeName}`);
        console.log(`Employee Designation: ${this.employeeDesignation}`);
        console.log(`Employee Department: ${this.employeeDepartment}`);
        console.log(`Employee Monthly Salary: BDT ${this.employeeMonthlySalary}`);
    }
    //* Method 02 : Calculate Annual Salary
    calculateAnnualSalary() {
        const annualSalary = this.employeeMonthlySalary * 12;
        return annualSalary;
    }
}
// const employee1 = new Employee("1001", "Rahim Uddin","Software Engineer","Information Tech", 250000)
// employee1.displayEmployeeInformation()
const emp1 = new Employee("001", "liton", "Soft Eng", "IT", 250000);
emp1.displayEmployeeInformation();
emp1.calculateAnnualSalary();
export {};
