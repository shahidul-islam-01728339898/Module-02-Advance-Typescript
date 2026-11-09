//Problem 1:
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
console.log(multiplyValue(10));
//Problem 2:
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else
        typeof value === "boolean";
    {
        if (value == true) {
            return '"Active"';
        }
        else {
            return '"Inactive"';
        }
    }
};
console.log(processInput('  "TypeScript"  '));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
//Problem 3:
const formatCoordinate = (coordinateLocation) => {
    const [latitude, longitude, locationName] = coordinateLocation;
    return `"Location: ${locationName} (${latitude}, ${longitude})"`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
const concatenateArrays = (...arrays) => {
    return arrays.reduce((result, array) => result.concat(array), []);
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
//Problem 7:
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `"Manager of Engineering: ${this.name}"`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
export {};
