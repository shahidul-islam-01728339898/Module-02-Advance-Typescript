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

class Employee{
    employeeId: string;
    employeeName: string;
    employeeDesignation: string;
    employeeDepartment: string;
    employeeMonthlySalary: number;

    constructor(
        employeeId: string,
        employeeName: string,
        employeeDesignation: string,
        employeeDepartment: string,
        employeeMonthlySalary: number
    ){
        this.employeeId=employeeId;
        this.employeeName= employeeName;
        this.employeeDesignation= employeeDesignation;
        this.employeeDepartment= employeeDepartment;
        this.employeeMonthlySalary= employeeMonthlySalary;
    }

    //* Method 01: Display Employee Informatiotn
    displayEmployeeInformation():void{
        console.log("Employee Information");
        console.log("====================");
        console.log(`Employee Id : ${this.employeeId}`)
        console.log(`Employee Name" ${this.employeeName}`);
        console.log(`Employee Designation: ${this.employeeDesignation}`)
        console.log(`Employee Department: ${this.employeeDepartment}`)
        console.log(`Employee Monthly Salary: BDT ${this.employeeMonthlySalary}`)
       
    }

    //* Method 02 : Calculate Annual Salary
    calculateAnnualSalary():number{
        const annualSalary = this.employeeMonthlySalary * 12;
        return annualSalary;
    }

    // //* Method 03 : Calculate Bonus
    // calculateBonus(percentage: number): number{
    //     const annualBonus = (this.employeeMonthlySalary * percentage) / 100;
    //     return annualBonus;
    // }

    // //* Method 04 : Calculate Salary After Bonus
    // calculateTotalSalaryWithBonus(percentage: number){
    //     const annualBonus = this.calculateBonus(percentage);
    //     const totalSalary = this.employeeMonthlySalary + annualBonus;
    //     return totalSalary;
    // }



}


// const employee1 = new Employee("1001", "Rahim Uddin","Software Engineer","Information Tech", 250000)
// employee1.displayEmployeeInformation()

const emp1 = new Employee("001","liton","Soft Eng", "IT", 250000)
emp1.displayEmployeeInformation()
emp1.calculateAnnualSalary()
