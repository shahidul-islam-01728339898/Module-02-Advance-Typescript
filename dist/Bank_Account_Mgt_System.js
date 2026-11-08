//* Real-life scenario
// Imagine you are developing a banking application.
//* Every customer has a bank account containing:
// - Account Number
// - Account Holder Name
// - Account Type
// - Account Balance
//* Customers can perform several banking operations:
// 1. Deposit money.
// 2. Withdraw money.
// 3. Check account balance.
// 4. Display account information.
//* Let's implement this using TypeScript.
class BankAccount {
    accountNumber;
    accountHolder;
    accountType;
    balance;
    constructor(accountNumber, accountHolder, accountType, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = balance;
    }
    //* Method 01 Deposit Money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount");
            // return
        }
        this.balance = this.balance + amount;
        console.log(`Deposited Successfully BDT: ${amount}`);
        console.log(`Current Balance is: BDT ${this.balance} `);
    }
    //* Method 02: Withdraw Money:
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount.");
            // return
        }
        if (amount > this.balance) {
            console.log(`${amount} is insufficient for withdraw`);
        }
        this.balance = this.balance - amount;
        console.log(`BDT ${amount} is withdraw successfully`);
        console.log(`BDT ${this.balance} is your Remaining Balance `);
    }
    //* Method 03 : Check Balance 
    checkBalance() {
        console.log(`Your checked account balance is ${this.balance}`);
    }
    //* Method 04: Display Account Info:
    displayAccountInfo() {
        console.log("Bank Account Information");
        console.log("========================");
        console.log(`Account Name: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Account Type" ${this.accountType}`);
        console.log(`Account Balance BDT: ${this.balance}`);
    }
}
const account1 = new BankAccount("SA_001", "Mr. Md. Shahidul Islam", "Savings", 50000);
account1.displayAccountInfo();
account1.deposit(15000);
account1.withdraw(5000);
console.log("\n");
account1.checkBalance();
console.log("\n");
const account2 = new BankAccount("SA_002", "Mr. Rahim Ahmed", "Current", 75000);
account2.displayAccountInfo();
account2.deposit(200000);
account2.withdraw(5000);
console.log("\n");
account2.checkBalance();
const account3 = new BankAccount("SA_003", "Mr. Karim Hasan", "Savings", 35000);
const account4 = new BankAccount("SA_004", "Ms. Nusrat Jahan", "Fixed Deposit", 100000);
const account5 = new BankAccount("SA_005", "Mr. Sabbir Hossain", "Savings", 60000);
export {};
