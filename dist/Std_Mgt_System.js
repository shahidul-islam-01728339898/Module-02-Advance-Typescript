// Real-life scenario
// Imagine you are developing a Student Management System for a school or university.
// Every student has some information:
// - Student ID
// - Student Name
// - Age
// - Department
// - Email
// Every student can perform certain activities:
// - Display student information.
// - Register for a course.
// - Check examination results.
// Let's implement this using TypeScript.
class Student {
    //* Student Properties 
    studentId;
    studentName;
    age;
    department;
    email;
    //* Student Constructor Method
    constructor(studentId, studentName, age, department, email) {
        this.studentId = studentId,
            this.studentName = studentName,
            this.age = age,
            this.department = department,
            this.email = email;
    }
    //* Method 01: Display Informatiotn 
    displayStudentInfo() {
        console.log("Student Information: OOP 110826");
        console.log("-------------------------------");
        console.log(`Student Id: ${this.studentId}`);
        console.log(`Student Name:  ${this.studentName}`);
        console.log(`Student Age ${this.age}`);
        console.log(`Student Department: ${this.department}`);
        console.log(`Student Email : ${this.email}`);
    }
    //* Method 02 : Register for a course
    registerCourse(courseName) {
        console.log(`${this.studentName} successfully register for ${this.department}`);
    }
    //* Methos 03: Check Result
    checkResult(marks) {
        if (marks >= 80) {
            console.log("Grade : A+");
        }
        else if (marks >= 70) {
            console.log("Grade : A");
        }
        else if (marks >= 60) {
            console.log("Grade : A-");
        }
        else if (marks >= 50) {
            console.log("Grade : G");
        }
        else {
            console.log("Grade : Fail");
        }
    }
}
console.log("\n");
const student1 = new Student(100, "Md. Shahidul", 33, "SCE", "cse@gmail.com");
const student3 = new Student(101, "Rahim Ahmed", 22, "CSE", "rahim@gmail.com");
const student4 = new Student(102, "Karim Hasan", 23, "EEE", "karim@gmail.com");
const student5 = new Student(103, "Nusrat Jahan", 21, "BBA", "nusrat@gmail.com");
const student6 = new Student(104, "Sabbir Hossain", 24, "Civil Engineering", "sabbir@gmail.com");
student1.displayStudentInfo();
student1.registerCourse("SCE");
student1.checkResult(99);
console.log("\n");
student3.displayStudentInfo();
student3.registerCourse("CSE");
student3.checkResult(78);
console.log("\n");
student4.displayStudentInfo();
student4.registerCourse("EEE");
student4.checkResult(55);
console.log("\n");
student5.displayStudentInfo();
student5.registerCourse("BBA");
student5.checkResult(65);
console.log("\n");
student6.displayStudentInfo();
student6.registerCourse("Civil Engineering");
student6.checkResult(40);
console.log("\n");
export {};
